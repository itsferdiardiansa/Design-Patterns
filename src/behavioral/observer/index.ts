interface EventListeners {
  update(filename: string): void
}

class EventManager {
  private listeners: [string, EventListeners][] = []

  subscribe(eventType: string, listener: EventListeners) {
    console.log("Subscribe")

    this.listeners.push([eventType, listener])
  }

  notify(eventType: string, data: string) {
    console.log("Notify: ", eventType, data)

    for (let [_, listener] of this.listeners) {
      listener.update(data)
    }
  }
}

class Editor {
  events: EventManager

  constructor() {
    this.events = new EventManager()
  }

  openFile(filename: string) {
    console.log("Open file")

    this.events.notify("open", filename)
  }

  saveFile(filename: string) {
    console.log("Save file")

    this.events.notify("save", filename)
  }
}

class EmailAlertsListerner implements EventListeners {
  constructor(public email: string, public message: string) {}

  update(filename: string): void {
    console.log(`${filename} has been updated`)
  }
}

class LoggingListener implements EventListeners {
  update(filename: string): void {
    console.log(`${filename} has been updated`)
  }
}

const editor = new Editor()
const email = new EmailAlertsListerner("Ferdi ardiansa", "ff@mail.com")

editor.events.subscribe("open", email)