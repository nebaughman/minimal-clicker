export class State {
  paused = false
  get units() { return Math.trunc(this.pieces) }
  pieces = 0.0
  unitsPerSec = 0
}