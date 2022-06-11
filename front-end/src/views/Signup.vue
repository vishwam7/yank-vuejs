<template>
  <div class="vue-tempalte">
    <center>
      <form style="width: 50%">
        <h3 style="margin-top: 65px">Sign Up</h3>
        <div class="form-group">
          <label>Full Name</label>
          <input
            type="text"
            v-model="name"
            class="form-control form-control-lg"
          />
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control form-control-lg"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control form-control-lg"
            v-model="password"
          />
        </div>
        <div class="form-group">
          <label>Password Confirm</label>
          <input
            type="password"
            class="form-control form-control-lg"
            v-model="passwordConfirm"
          />
        </div>
        <button
          type="submit"
          v-on:click.prevent="signUp(name, email, password, passwordConfirm)"
          class="btn btn-dark btn-lg btn-block"
        >
          Sign Up
        </button>
        <p class="forgot-password text-right" style="margin-bottom: 65px">
          Already registered
          <router-link :to="{name: 'login'}">sign in?</router-link>
        </p>
      </form>
    </center>
  </div>
</template>
<script>
import axios from 'axios';
import {useCookies} from 'vue3-cookies';
import config from '@/config';

export default {
  setup() {
    const {cookies} = useCookies();
    return {cookies};
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errors: [],
    };
  },
  methods: {
    signUp: function (name, email, password, passwordConfirm) {
      axios
        .post(
          `${config.url}/api/signup`,
          {
            name,
            email,
            password,
            passwordConfirm,
          },
          {withCredentials: true}
        )
        .then(response => {
          // console.log(response.data.token);
          console.log(response);
          //cookies management
          let my_cookie_value = this.cookies.get('jwt');
          console.log(my_cookie_value);
          this.cookies.set('jwt', response.data.token);
          this.$router.push('/login');
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
  },
};
</script>
