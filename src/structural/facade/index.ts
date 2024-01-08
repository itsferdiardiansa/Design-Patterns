// These are 3rd-party library
class OrderService {
  createOrder() {
    console.log("Order created")
  }

  getOrderDetail() {
    return {
      orderId: crypto.randomUUID(),
      expiredAt: +new Date()
    }
  }
}

class ProductCacheSystem {
  static removeCacheById(key: string) {
    console.log(`CACHE key ${key} is sucessfully removed`)
  }
}

class PaymentService {
  static createPayment() {
    console.log("Payment created")
  }
}

class TransactionFacade {
  service!: OrderService
  
  constructor() {
    this.service = new OrderService()
  }

  checkout() {
    ProductCacheSystem.removeCacheById("PK-89")
    PaymentService.createPayment()


    this.service.createOrder()

    return this.service.getOrderDetail()
  }
}

const process = new TransactionFacade()
console.log("Order detail: ", process.checkout())