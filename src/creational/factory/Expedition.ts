type ShippingNumber = `PK-#${string}`

abstract class Logistic {
  constructor(
    public destination: string,
    public shippingNumber: ShippingNumber
  ) {}

  abstract planDelivery(): void
}

class RoadLogistic extends Logistic {
  constructor(
    public destination: string, 
    public shippingNumber: ShippingNumber
  ) {
    super(destination, shippingNumber)
  }

  planDelivery() {
    console.log(`[${this.shippingNumber}] will devliver to [${this.destination}]`)
  }
}

class SeaLogistic extends Logistic {
  constructor(
    public destination: string, 
    public shippingNumber: ShippingNumber
  ) {
    super(destination, shippingNumber)
  }

  planDelivery() {
    console.log(`[${this.shippingNumber}] will devliver to [${this.destination}]`)
  }

  generateShipNumber() {
    return crypto.randomUUID()
  }
}

class LogisticFactory {
  static createLogistic(
    logisticPlan: "truck" | "sea"| "train", 
    ...params: ConstructorParameters<typeof Logistic>
  ) {
    if (logisticPlan in ["truck", "train"]) {
      return new RoadLogistic(...params)
    } else if (logisticPlan === "sea") {
      return new SeaLogistic(...params)
    } else {
      throw new Error(`[${logisticPlan}] is not listed`)
    }
  }
}

const shipper = LogisticFactory.createLogistic("truck", "SUB", "PK-#1234")
const shipper2 = LogisticFactory.createLogistic("sea", "JKT", "PK-#3456")