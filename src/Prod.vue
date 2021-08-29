<template>
  <div>
    <h2>Production</h2>

    <p>Running: {{ !paused }}</p>
    <p>Units per second: {{ unitsPerSec }}</p>
    <p>Units: {{ units }}</p>

    <button @click="handleClick">Increase</button>
    <button @click="handlePause">Pause</button>
    <button @click="handleReset">Reset</button>
  </div>
</template>

<script>
  export default {

    computed: {
      paused() {
        return this.$state.paused
      },

      units() {
        return this.$state.units
      },

      unitsPerSec() {
        return this.$state.unitsPerSec
      },
    },

    methods: {
      handleClick() {
        this.$engine.incrementUnitsPerSec()
      },

      handlePause() {
        this.$engine.togglePause()
      },

      handleReset() {
        this.$engine.reset()
      },
    },

    /*
    watch: {
      units(value) { console.log("units", value) },
      unitsPerSec(value) { console.log("u/s", value) }, // no update even though full state being assigned
    },
    */
  }
</script>

<style scoped>
</style>