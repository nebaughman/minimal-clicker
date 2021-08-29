<template>
  <span class="msg" :class="msgClass"><slot/></span>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: true,
      },
    },

    computed: {
      msgClass() {
        return this.visible ? "msg-visible" : "msg-hidden";
      },
    },
  }
</script>

<style scoped>
  .msg {
    transition: opacity 1000ms;
  }

  .msg-hidden {
    visibility: hidden;
    opacity: 0;
  }

  .msg-visible {
    visibility: visible;
    opacity: 1;
  }
</style>