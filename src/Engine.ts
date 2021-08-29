import {State} from "./State"

//@ts-ignore
import Worker from "worker-loader!./worker.js"

/**
 * This class runs a Worker and maintains State.
 * Engine acts as a facade to proxy events to/from the Worker.
 * Primarily, when the Worker posts new State, the local State instance is updated,
 * allowing components to react to the change in state.
 */
export class Engine {

  private readonly worker = new Worker()

  constructor(
    private readonly state: State, // instance of State to sync with worker
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

  reset() {
    this.command("reset")
  }

  incrementUnitsPerSec() {
    this.command("incrementUnitsPerSec")
  }

  togglePause() {
    this.command("togglePause")
  }

  private command(command: any) {
    this.worker.postMessage({
      type: "command",
      command,
    })
  }
}
