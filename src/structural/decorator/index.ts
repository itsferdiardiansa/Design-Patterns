interface Message {
  message: string
  send(): void
  getMessage(): string
}

class WebMessage implements Message {
  constructor(public message: string) {}

  send(): void {
    console.log("Send to local")
  }

  getMessage(): string {
    return this.message
  }
}

abstract class MassageDecorator implements Message {
  message!: string

  constructor(protected wrappe: Message) {
    this.wrappe = wrappe
  }

  abstract send(): void 

  abstract getMessage(): string
}

class FacebookMassegDecorator extends MassageDecorator {
  private FB = { 
    pushMessage: (msg: string) => {
      console.log(`"${msg}" has been sent to you Facebook Massanger`)
    } 
  }

  send(): void {
    this.FB.pushMessage(this.wrappe.getMessage())
  }

  getMessage(): string {
    return this.wrappe.message
  }
}

class SlackMassegDecorator extends MassageDecorator {
  private Slack = { 
    sendMessage: (msg: string) => {
      console.log(`"${msg}" has been sent to your Slack channel`)
    } 
  }

  send(): void {
    this.Slack.sendMessage(this.wrappe.getMessage())
  }

  getMessage(): string {
    return this.wrappe.message
  }
}

let message = new WebMessage("I'm trying the decorator of design pattern")
message = new FacebookMassegDecorator(message)
message.send()

message = new SlackMassegDecorator(message)
message.send()