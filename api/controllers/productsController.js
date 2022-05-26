const Products = require('../model/Products');
const Users = require('../model/User');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const AppErr = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
exports.getAll = async function (req, res) {
  console.log('get all products called!!');
  const products = await Products.find();
  res.send(products);
};

exports.registerProduct = catchAsync(async (req, res) => {
  console.log('registering product is called!!');
  const product = await stripe.products.create({
    name: req.body.botDescription,
  });
  const newProduct = await Products.create({
    id: req.body.botId,
    price: req.body.botPrice,
    image: req.body.image,
    description: req.body.botDescription,
    favorite: req.body.favorite,
    activeProduct: req.body.activeProduct,
    stripeProductID: product.id,
  });

  return res.status(201).json({
    status: 'success',
    data: {
      newProduct,
    },
  });
});

/**
 * @async
 * @description used to create subscriptions to the user account
 */
exports.subscribe = catchAsync(async (req, res, next) => {
  const product = await Products.findOne({id: req.params.id});

  const user = await Users.findById(req.user._id);

  if (!product) {
    return next(new AppErr('Invalid product ID', 400));
  }

  const price =
    req.body.interval === 'month'
      ? product.price * req.body.intervalCount
      : product.price * 12;

  const subscription = await stripe.subscriptions.create({
    customer: req.user.stripeCustomerID,
    items: [
      {
        price_data: {
          currency: 'BRL',
          product: product.stripeProductID,
          recurring: {
            interval: req.body.interval,
            interval_count: req.body.intervalCount,
          },
          unit_amount_decimal: price,
        },
      },
    ],
    payment_behavior: 'default_incomplete',
    expand: ['latest_invoice.payment_intent'],
    cancel_at_period_end: true,
  });

  user.subscriptions.push({
    subscriptionID: subscription.id,
    productID: product.stripeProductID,
    interval: req.body.interval,
    intervalCount: req.body.intervalCount,
    amountPaid: price / 100,
  });

  await user.save({validateBeforeSave: false});

  return res.send({
    subscriptionId: subscription.id,
    clientSecret: subscription.latest_invoice.payment_intent.client_secret,
  });
});
