<template>
  <div class="msg" :class="msgClass">
    <a href="https://github.com/nebaughman/minimal-clicker">
      <slot>GitHub project</slot> &rarrtl;
    </a>
  </div>
</template>

<script>
  export default {
    computed: {
      units() {
        return this.$state.units
      },

      msgClass() {
        return this.units >= 10 ? "msg-visible" : false;
      },
    },
  }
</script>

<style scoped>
  .msg {
    margin-top: 32px;
    opacity: 0;
  }

  .msg-visible {
    opacity: 1;
    transition: opacity 1000ms;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-shadow: 1px 1px 3px #ccc;
  }
</style>