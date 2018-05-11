<template>
  <div :class="{ focused, error, 'text-input': !textarea, 'text-field': textarea }">
    <div class="text-input--inner">
      <div class="input-wrap">
        <div class="placeholder-wrap">
          <span class="input-placeholder" v-if="!contents">{{ placeholder }}</span>
        </div>
        <input type="text" @focusout="focusOut" @focus="focusIn" v-model="contents" v-if="!textarea">
        <textarea type="text" @focusout="focusOut" @focus="focusIn" v-model="contents" v-else />
      </div>
      <transition name="fade">
        <p class="error-message" v-if="error">{{ error }}</p>
      </transition>
      <span class="input-right input-border"></span>
      <span class="input-top input-border"></span>
      <span class="input-left input-border"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focused: false,
      contents: ''
    }
  },
  watch: {
    contents(val) {
      this.$emit('update:value', val)
    }
  },
  methods: {
    focusOut() {
      this.focused = false
    },
    focusIn() {
      this.focused = true
    },
  },
  props: {
    placeholder: {
      type: String,
    },
    value: {
      required: true
    },
    textarea: {
      type: Boolean,
      default: () => false
    },
    error: {
      type: String,
      default: () => ''
    },
  }
}
</script>
