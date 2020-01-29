import {State} from "./State"

//@ts-ignore
import Worker from "worker-loader!./Engine.worker.js"

export class Engine {

  private readonly worker = new Worker()

  constructor(
    private readonly state: State,
  ) {
    this.worker.onmessage = (event: any) => this.handleEvent(event)
  }

  private terminate() {
    this.worker.terminate()
  }

  private handleEvent(event: any) {
    const data = event.data // payload from worker
    if (data.type === "state") {
      Object.assign(this.state, data.state)
    } else {
      console.log("Message from worker", data)
    }
  }

  incrementUnitsPerSec() {
    //this.updateState({
    //  unitsPerSec: this.state.unitsPerSec + 1
    //})
    this.command("incrementUnitsPerSec")
  }

  togglePause() {
    this.command("togglePause")
  }

  reset() {
    this.updateState(new State())
  }

  private command(command: any) {
    this.post({ type: "command", command })
  }

  private updateState(state: any) {
    this.post({ type: "update", state })
  }

  private post(msg: any) {
    this.worker.postMessage(msg)
  }

}
