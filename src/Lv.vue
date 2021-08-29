<template>
  <div class="lv">
    <msg :visible="lv >= 1">
      You've reached
      <span class="lv-indicator" :class="lvClass">Lv{{ lv }}</span>
    </msg>
    <msg :visible="lv >= 2" class="inset">
      &raquo; Learn more:
      <a href="https://github.com/nebaughman/minimal-clicker">
        GitHub project &rarrtl;
      </a>
    </msg>
    <msg :visible="lv >= 3" class="inset">
      &raquo; Well done!
      <a href="https://www.buymeacoffee.com/nebaughman">
        Buy Me a Coffee &rarrtl;
      </a>
    </msg>
  </div>
</template>

<script>
  import Msg from "./Msg.vue"

  export default {
    components: { Msg },

    data() {
      return {
        leveledUp: false,
      }
    },

    computed: {
      units() {
        return this.$state.units
      },

      lv() {
        if (this.units <= 0) return 0
        return Math.floor(Math.log10(this.units))
      },

      lvClass() {
        return this.leveledUp ? "levelup" : false
      },
    },

    watch: {
      lv() {
        this.leveledUp = true
        setTimeout(() => this.leveledUp = false, 1000)
      },
    },
  }
</script>

<style scoped>
  .lv {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: inherit;
  }

  a:hover {
    text-shadow: 1px 1px 3px #ff0;
  }

  span.inset {
    padding-left: 1em;
  }

  .lv-indicator {
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: border 250ms ease-in-out;
  }

  .levelup {
    border-bottom-color: green;
  }

  /*
  .balloon {
    animation-name: balloon;
    animation-duration: 1000ms;
    animation-iteration-count: 8;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }
  @keyframes balloon {
    from { transform: scale(1); }
    to { transform: scale(2); }
  }
  */
</style>