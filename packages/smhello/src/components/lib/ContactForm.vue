<template>
  <section class="contact-form">
    <div class="contact-form--inner">
      <form class="contact-form-wrap">
        <Text-input placeholder="Name" :value.sync="name" :error="errors.name" />
        <Text-input placeholder="Email" :value.sync="email" :error="errors.email" />
        <Text-input placeholder="Message" :value.sync="message" :textarea="true" :error="errors.message" />
      </form>
      <div class="contact-form-submit">
        <a href="" class="contact-form-send" @click.prevent="submit">send</a>
      </div>
    </div>

  </section>
</template>

<script>
import axios from 'axios'
import TextInput from '../lib/TextInput'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  components: {
    TextInput
  },
  methods: {
    submit() {
      if (this.validate()) {
        axios({
          url: 'https://formspree.io/hurlburt.chris@gmail.com',
          method: 'post',
          data: {
            name: this.name,
            email: this.email,
            message: this.message
          }
        })
        this.$emit('submitted')
      }
    },
    validate() {
      Object.keys(this.errors).forEach(key => this.errors[key] = '')

      if (!this.name) this.errors.name = 'Please enter your name.'
      if (!this.email.includes('@')) this.errors.email = 'Please enter a valid email.'
      if (!this.message) this.errors.message = 'Please enter a message.'

      if (!Object.keys(this.errors).every(key => this.errors[key].length === 0)) return false

      return true

    }
  },
}
</script>
