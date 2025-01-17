/*
 * Web Worker
 *
 * This Web Worker interprets commands posted from the browser-side
 * and signals when State has been updated. Notice that all messages to/from
 * service workers are serialized. So, the worker cannot update the application
 * state directly. Instead, Engine.ts receives state updates and syncs that up
 * with the application state.
 */

// TODO: TypeScript

import {State} from "./State"

const state = new State() // local state

const rate = 40 // ms per update cycle
// TODO: sample actual rate, adjust this if getting behind

// TODO: use animation timer
const timer = setInterval(() => updateState(1000 / rate), rate)

/**
 * Update state with given time increment
 */
function updateState(inc) {
  if (state.paused) return
  state.pieces += state.unitsPerSec / inc
  postState()
}

function postState() { // TODO: consider watcher
  postMessage({ type: "state", state })
}

onmessage = (event) => {
  const data = event.data // payload from host
  //console.log("Worker received", data) // TODO: loglevel
  if (data.type === "command") {
    if (data.command === "reset") {
      Object.assign(state, new State())
    } if (data.command === "incrementUnitsPerSec") {
      state.unitsPerSec++
    } else if (data.command === "togglePause") {
      state.paused = !state.paused // TODO: cancel/create interval
    }
    postState() // inform of new state immediately (not on next cycle)
  } else {
    console.warn("Worker received unexpected data", data)
  }
}

// https://stackoverflow.com/q/2221167
function rounder(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

async function stall(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}