interface AbstractProductA {
  useFunctionA(): string
}

interface AbstractProductB {
  useFunctionB(): string
}

interface AbstractFactory {
  createProductA(): AbstractProductA
  createProductB(): AbstractProductB
}

class ConcreateProductA1 implements AbstractProductA {
  useFunctionA(): string {
    return "The result of product A1"
  }
}

class ConcreateProductA2 implements AbstractProductA {
  useFunctionA(): string {
    return "The result of product A2"
  }
}

class ConcreateProductB1 implements AbstractProductB {
  useFunctionB(): string {
    return "The result of product B1"
  }
}

class ConcreateProductB2 implements AbstractProductB {
  useFunctionB(): string {
    return "The result of product B2"
  }
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreateProductA1()
  }

  createProductB(): AbstractProductB {
    return new ConcreateProductB1()
  }
}

class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreateProductA2()
  }

  createProductB(): AbstractProductB {
    return new ConcreateProductB2()
  }
}

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA()
  const productB = factory.createProductB()

  console.log(productA.useFunctionA())
  console.log(productB.useFunctionB())
}

clientCode(new ConcreteFactory1())

clientCode(new ConcreteFactory2())