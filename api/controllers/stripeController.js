const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const User = require('../model/User');
const catchAsync = require('./../utils/catchAsync');

/**
 * @async
 * @description used to handle stripe API webhooks. Supported event types:
 *  - customer.subscription.created
 *  - customer.subscription.updated
 *  - customer.subscription.deleted
 *  - invoice.payment_succeeded
 * @see https://stripe.com/docs/billing/subscriptions/webhooks
 */
exports.handleStripeWebhook = catchAsync(async (req, res) => {
  // Retrieve the event by verifying the signature using the raw body and secret.
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      req.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(err);
    console.log(`Webhook signature verification failed.`);
    return res.sendStatus(400);
  }
  // Extract the object from the event.
  const dataObject = event.data.object;

  // Handle the event
  switch (event.type) {
    case 'customer.subscription.created': {
      const customer = dataObject['customer'];
      const user = await User.findOne({stripeCustomerID: customer});
      if (user) {
        const sub = user.subscriptions.find(
          x => x.subscriptionID === dataObject['id']
        );
        sub.status = dataObject['status'] === 'active';
        sub.updatedAt = new Date();
        await user.save({validateBeforeSave: false});
      }
      break;
    }
    case 'customer.subscription.updated': {
      const customer = dataObject['customer'];
      const user = await User.findOne({stripeCustomerID: customer});
      if (user) {
        const sub = user.subscriptions.find(
          x => x.subscriptionID === dataObject['id']
        );
        sub.updatedAt = new Date();
        sub.status = dataObject['status'] === 'active';
        await user.save({validateBeforeSave: false});
      }
      break;
    }
    case 'customer.subscription.deleted': {
      const customer = dataObject['customer'];
      const user = await User.findOne({stripeCustomerID: customer});
      if (user) {
        const sub = user.subscriptions.find(
          x => x.subscriptionID === dataObject['id']
        );
        sub.status = dataObject['status'] === 'active';
        sub.deleted = true;
        sub.updatedAt = new Date();
        await user.save({validateBeforeSave: false});
      }
      break;
    }
    case 'invoice.payment_succeeded': {
      const subscriptionID = dataObject['subscription'];
      if (dataObject['billing_reason'] === 'subscription_create') {
        const paymentIntentID = dataObject['payment_intent'];
        const paymentIntent = await stripe.paymentIntents.retrieve(
          paymentIntentID
        );
        const subscription = await stripe.subscriptions.update(subscriptionID, {
          default_payment_method: paymentIntent.payment_method,
        });
        console.log(
          'Subscription updated to set default payment: ',
          subscription.status
        );
      }
      const user = await User.findOne({
        'subscriptions.subscriptionID': subscriptionID,
      });
      if (user) {
        const sub = user.subscriptions.find(
          x => x.subscriptionID === subscriptionID
        );
        sub.status = true;
        await user.save({validateBeforeSave: false});
      }
      break;
    }
    default: {
      // Unexpected event type
      break;
    }
  }
  return res.sendStatus(200);
});
