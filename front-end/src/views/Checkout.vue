<template>
  <div v-on:vnode-mounted="checkStatus" class="mid">
    <div v-if="status === 'success'">
      <CheckCircle class="success" />
    </div>
    <div v-if="status === 'processing'">
      <DotCircle class="processing" />
    </div>
    <div v-if="status === 'failure'">
      <ExclamationCircle class="failure" />
    </div>
    <div id="payment-message" class="hidden"></div>
  </div>
</template>
<script>
import CheckCircle from '@heroicons/vue/solid/CheckCircleIcon';
import ExclamationCircle from '@heroicons/vue/solid/ExclamationCircleIcon';
import DotCircle from '@heroicons/vue/solid/DotsCircleHorizontalIcon';
export default {
  data() {
    return {
      stripe: window.Stripe(process.env.VUE_APP_STRIPE_API_KEY),
      status: '',
    };
  },
  components: {
    CheckCircle,
    ExclamationCircle,
    DotCircle,
  },
  methods: {
    showMessage(messageText) {
      const messageContainer = document.querySelector('#payment-message');
      messageContainer.classList.remove('hidden');
      messageContainer.textContent = messageText;
    },
    async checkStatus() {
      const clientSecret = new URLSearchParams(window.location.search).get(
        'payment_intent_client_secret'
      );
      if (!clientSecret) {
        return;
      }
      const {paymentIntent} = await this.stripe.retrievePaymentIntent(
        clientSecret
      );
      switch (paymentIntent.status) {
        case 'succeeded':
          this.showMessage('Payment succeeded!');
          this.status = 'success';
          break;
        case 'processing':
          this.showMessage('Your payment is processing.');
          this.status = 'processing';
          break;
        case 'requires_payment_method':
          this.showMessage(
            'Your payment was not successful, please try again.'
          );
          this.status = 'failure';
          break;
        default:
          this.showMessage('Something went wrong.');
          this.status = 'failure';
          break;
      }
    },
  },
};
</script>
<style>
.success {
  height: 30px;
  width: 30px;
  color: green;
}

.failure {
  height: 30px;
  width: 30px;
  color: red;
}

.processing {
  height: 30px;
  width: 30px;
  color: orange;
}

.mid {
  text-align: center;
  margin-top: 10px;
}
</style>
