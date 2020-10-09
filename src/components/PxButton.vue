<template>
  <button @click="buttonClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PxButton',
  methods: {
    buttonClick() {
      this.$emit('click')
    }
  }
}
</script>
