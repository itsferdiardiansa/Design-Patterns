interface Builder {
  createProductA(): void
  createProductB(): void
  createPrroductC(): void
}

class Product {
  parts: string[] = []

  getLists() {
    return this.parts
  }
}

class ConcreteBuilder implements Builder {
  private products!: Product

  createProductA(): void {
    this.products.parts.push("Product A")
  }
  
  createProductB(): void {
    this.products.parts.push("Product B")
  }

  createPrroductC(): void {
    this.products.parts.push("Product C")
  }

  reset() {
    this.products = new Product()
  }

  getBuilder() {
    const result = this.products

    this.reset()

    return result
  }
}

class Director {
  builder!: Builder

  setBuilder(builder: Builder) {
    this.builder = builder
  }

  buildMinimalViableProduct() {
    this.builder.createProductA()
  }

  buildFullFeaturedProduct() {
    this.builder.createProductA()
    this.builder.createProductB()
    this.builder.createPrroductC()
  }
}

function clientCode(director: Director) {
  const builder = new ConcreteBuilder()
  director.setBuilder(builder)

  console.log("Standard basic features")
  director.buildMinimalViableProduct()
  builder.getBuilder().getLists()

  console.log("Standard full featured product")
  director.buildFullFeaturedProduct()
  builder.getBuilder().getLists()

  console.log("Custom product")
  builder.createProductA()
  builder.createProductB()
  builder.getBuilder().getLists()
}