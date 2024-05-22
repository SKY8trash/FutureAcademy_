<template>
  <button class="button" type="button">{{ itembtn.itemBtn }}</button>
</template>

<script>
export default {
  props: {
    itembtn: {
      type: Object,
      required: true,
      discount: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "ItemButton.scss";
</style>
