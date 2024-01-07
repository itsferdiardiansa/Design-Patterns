interface Device {
  enable: boolean
  getVolume(): number
  setVolume(value: number): void
  getChannel(): number
  setChannel(value: number): void
}

class RemoteControl {
  constructor(private device: Device) {
    this.device = device
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 1)
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 1)
  }
  
  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1)
  }

  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1)
  }
}

class TV implements Device {
  private volume = 0
  private channel = 11
  enable: boolean = false

  isEnable(): boolean {
    return this.enable
  }

  setVolume(value: number): void {
    this.volume = value
  }

  getVolume(): number {
    return this.volume
  }

  setChannel(value: number): void {
    this.channel = value
  }

  getChannel(): number {
    return this.channel
  }
}

class Radio implements Device {
  private volume = 10
  private channel = 2
  enable: boolean = false

  isEnable(): boolean {
    return this.enable
  }

  setVolume(value: number): void {
    this.volume = value
  }

  getVolume(): number {
    return this.volume
  }

  setChannel(value: number): void {
    this.channel = value
  }

  getChannel(): number {
    return this.channel
  }
}

const tv = new TV()
const remoteTV = new RemoteControl(tv)

tv.setVolume(2)