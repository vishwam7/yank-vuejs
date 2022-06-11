<template>
  <div class="price-box">
    <div class="price-tools">
      <i
        class="fas fa-star"
        v-bind:style="{color: favorite ? '#269DFF' : '#B5B5C3'}"
      ></i>
      <div class="form-group">
        <span class="switch switch-sm">
          <label>
            <input type="checkbox" checked="true" name="select" />
            <span></span>
          </label>
        </span>
      </div>
    </div>
    <div class="price-img">
      <img :src="require('@/assets/' + image + '.png')" /><br />
      <span>{{ category }}</span>
    </div>
    <br />
    <div class="price-info">
      <span
        ><h4>{{ header }}</h4>
        <h4 class="home_txt">{{ link }}</h4></span
      ><br />
      <p>{{ paragragh }}</p>
    </div>
    <div class="verRobos mb-5">
      <a
        href="#"
        @click="showModal = true"
        class="btn btn-white font-weight-bold btn-square mt-20"
        >COMPRE AGORA</a
      >
    </div>
    <Teleport to="body">
      <modal :show="showModal" @close="initialize">
        <template #header>
          <h3>Proceed to payment?</h3>
          <XIcon class="nv-x" v-on:click="showModal = false" />
        </template>
        <template #body>
          <div class="grid-container">
            <div class="grid-item">
              <img :src="require('@/assets/' + image + '.png')" class="test" />
            </div>
            <div class="grid-item">
              <div class="input-group mb-3">
                <label for="sub_type" class="mr-2"
                  >Select subscription type:
                </label>
                <select
                  class="form-select"
                  name="sub_type"
                  id="sub_type"
                  @change="subChange($event, 'type')"
                >
                  <option :selected="true">Monthly</option>
                  <option>Yearly</option>
                </select>
              </div>
              <br />
              <div class="input-group mb-3">
                <label for="sub_interval" class="mr-2"
                  >Select subscription interval:
                </label>
                <select
                  class="form-select"
                  name="sub_interval"
                  id="sub_interval"
                  @change="subChange($event, 'count')"
                >
                  <option
                    v-for="option in options"
                    :selected="option === intervalCount"
                    :key="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <br />
              <hr />
              <div class="input-group mb-3">
                <label class="mr-2 pt-2">Subtotal: </label>
                <span class="input-group-text" id="basic-addon1">R$</span>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  :placeholder="amount"
                />
              </div>
            </div>
            <div class="grid-item">{{ paragragh }}</div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
          </div>
        </template>
      </modal>
    </Teleport>
    <Teleport to="body">
      <modal :show="showCheckoutModal" @close="showCheckoutModal = false">
        <template #header>
          <h3>Stripe Payment Checkout</h3>
        </template>
        <template #body>
          <div class="align-mid">
            <div>
              <form id="payment-form" @submit="handleSubmit">
                <div id="payment-element"></div>
                <button id="submit">
                  <div class="spinner hidden" id="spinner"></div>
                  <span id="button-text">Pay now</span>
                </button>
                <div id="payment-message" class="hidden"></div>
              </form>
            </div>
          </div>
        </template>
        <template #footer><div></div> </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import axios from 'axios';
import config from '@/config';
import Modal from './Modal.vue';
import {useCookies} from 'vue3-cookies';
import XIcon from '@heroicons/vue/solid/XIcon';
export default {
  setup() {
    const {cookies} = useCookies();
    return {cookies};
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    paragragh: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      required: true,
    },
    online: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  components: {
    Modal,
    XIcon,
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      this.setLoading(true);
      const {error} = await this.stripe.confirmPayment({
        elements: this.elements,
        confirmParams: {
          return_url: '/checkout',
        },
      });
      if (error.type === 'card_error' || error.type === 'validation_error') {
        this.showMessage(error.message);
      } else {
        this.showMessage('An unexpected error occurred.');
      }
      this.setLoading(false);
    },
    setLoading(isLoading) {
      if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector('#submit').disabled = true;
        document.querySelector('#spinner').classList.remove('hidden');
        document.querySelector('#button-text').classList.add('hidden');
      } else {
        document.querySelector('#submit').disabled = false;
        document.querySelector('#spinner').classList.add('hidden');
        document.querySelector('#button-text').classList.remove('hidden');
      }
    },
    showMessage(messageText) {
      const messageContainer = document.querySelector('#payment-message');
      messageContainer.classList.remove('hidden');
      messageContainer.textContent = messageText;
      setTimeout(function () {
        messageContainer.classList.add('hidden');
        messageText.textContent = '';
      }, 4000);
    },
    async initialize() {
      try {
        this.showModal = false;
        this.showCheckoutModal = true;
        const response = await axios.post(
          `${config.url}/api/buyNow/${this.id}`,
          {
            interval: this.interval,
            intervalCount: this.intervalCount,
          },
          {
            withCredentials: true,
          }
        );
        const appearance = {
          theme: 'stripe',
        };
        this.elements = await this.stripe.elements({
          appearance,
          clientSecret: response.data.clientSecret,
        });
        const paymentElement = this.elements.create('payment');
        paymentElement.mount('#payment-element');
      } catch (error) {
        console.log(error);
      }
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
          break;
        case 'processing':
          this.showMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          this.showMessage(
            'Your payment was not successful, please try again.'
          );
          break;
        default:
          this.showMessage('Something went wrong.');
          break;
      }
    },
    subChange(event, type) {
      console.log(this.price);
      if (type === 'type') {
        if (event.target.value === 'Monthly') {
          this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          this.interval = 'month';
        } else if (event.target.value === 'Yearly') {
          this.options = [1];
          this.interval = 'year';
        }
      }
      if (type === 'count') {
        this.intervalCount = parseInt(event.target.value, 10);
      }
      this.amount =
        this.interval === 'month'
          ? (this.price * this.intervalCount) / 100
          : (this.price * 12) / 100;
    },
  },
  data() {
    return {
      showModal: false,
      showCheckoutModal: false,
      elements: null,
      stripe: window.Stripe(process.env.VUE_APP_STRIPE_API_KEY),
      interval: 'month',
      intervalCount: 1,
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      amount: this.price / 100,
    };
  },
};
</script>

<style>
.align-mid {
  text-align: center;
}

.test {
  height: 100px;
}

form {
  width: 30vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;
}

.hidden {
  display: none;
}

#payment-message {
  color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
}

#payment-element {
  margin-bottom: 24px;
}

/* Buttons and links */
button {
  background: #5469d4;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
}
button:hover {
  filter: contrast(115%);
}
button:disabled {
  opacity: 0.5;
  cursor: default;
}

/* spinner/processing state, errors */
.spinner,
.spinner:before,
.spinner:after {
  border-radius: 50%;
}
.spinner {
  color: #ffffff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.spinner:before,
.spinner:after {
  position: absolute;
  content: '';
}
.spinner:before {
  width: 10.4px;
  height: 20.4px;
  background: #5469d4;
  border-radius: 20.4px 0 0 20.4px;
  top: -0.2px;
  left: -0.2px;
  -webkit-transform-origin: 10.4px 10.2px;
  transform-origin: 10.4px 10.2px;
  -webkit-animation: loading 2s infinite ease 1.5s;
  animation: loading 2s infinite ease 1.5s;
}
.spinner:after {
  width: 10.4px;
  height: 10.2px;
  background: #5469d4;
  border-radius: 0 10.2px 10.2px 0;
  top: -0.1px;
  left: 10.2px;
  -webkit-transform-origin: 0px 10.2px;
  transform-origin: 0px 10.2px;
  -webkit-animation: loading 2s infinite ease;
  animation: loading 2s infinite ease;
}

@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 600px) {
  form {
    width: 80vw;
    min-width: initial;
  }
}

.grid-container {
  display: grid;
  grid-template-columns: 500px 500px;
  padding: 10px;
}
.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
  font-size: medium;
}
.nv-x {
  color: gray;
  height: 20px;
  width: 20px;
}
.nv-x:hover {
  cursor: pointer;
}
</style>
