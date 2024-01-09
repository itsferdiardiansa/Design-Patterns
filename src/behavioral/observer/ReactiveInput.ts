type EventKind = "onChange" | "onInput"

interface EventListeners<T = {}> {
  kind?: EventKind
  update<R = {}>(data: R): void
}

interface EventHandler {
  onInput<T = {}>(payload: T): void
  onChange<T = {}>(payload: T): void
}

class EventManager {
  private listeners: EventListeners[] = []
  
  subscribe(listeners: EventListeners): void {
    this.listeners.push(listeners)

    console.log("listeners: ", this.listeners)
  }

  notify<T = {}>(eventKind: EventKind, data: T) {
    for (let listener of this.listeners) {
      listener.update(data)
    }
  }
}

class EventHandlerElement implements EventHandler {
  event: EventManager
  
  constructor() {
    this.event = new EventManager()
  }

  onInput<T = {}>(payload: T) {
    this.event.notify("onInput", payload)
  }

  onChange<T = {}>(payload: T) {
    this.event.notify("onChange", payload)
  }
}

class InputElement implements EventListeners {
  update<T>(data: T): void {
    console.log("Input element: ", data)
  }
}

const handler = new EventHandlerElement()
const input = new InputElement()
const input2 = new InputElement()
const input3 = new InputElement()

handler.event.subscribe(input)
handler.event.subscribe(input2)
handler.event.subscribe(input3)

handler.onInput({ id: crypto.randomUUID() })