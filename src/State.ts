/**
 * App state.unitsPerSec
 *
 * - main.ts creates a State (this.$state) and Engine (this.$engine) for app components
 * - Components can react to State changes, and signal Engine with commands
 * - Engine posts commands to the worker and applies State updates from the worker
 * - Engine.worker (the service worker) has its own State and posts state updates
 */
export class State {
  paused = false
  get units() { return Math.trunc(this.pieces) }
  pieces = 0.0
  unitsPerSec = 0
}