<template>
  <section class="contact-page">
    <transition name="fade" mode="out-in">
      <div class="contact-page-inner" v-if="!submitted">
        <h2 class="contact-page-cta">Let's talk</h2>
        <ContactForm @submitted="() => submitted = true" />
      </div>
      <h2 class="contact-page-cta" v-else>Thanks for reaching out!</h2>
    </transition>
  </section>
</template>

<script>
import ContactForm from '../lib/ContactForm'

export default {
  data() {
    return {
      submitted: false
    }
  },
  components: {
    ContactForm
  }
}
</script>
