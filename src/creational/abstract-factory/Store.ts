interface Chair {
  hasLegs(): boolean
  sitOn(): boolean
}

interface Table {
  hasAppron(): boolean
}

interface FurnitureFactory {
  createChair(): Chair
  createCoffeTable(): Table
}

class VictoryanChair implements Chair {
  hasLegs(): boolean {
    return false
  }

  sitOn(): boolean {
    return true
  }
}

class VictoryanTable implements Table {
  hasAppron(): boolean {
    return false
  }
}


class ModernChair implements Chair {
  hasLegs(): boolean {
    return true
  }

  sitOn(): boolean {
    return true
  }
}

class ModernTable implements Table {
  hasAppron(): boolean {
    return true
  }
}

class VictoryanFurnitureFactory implements FurnitureFactory {
  name = "Victoryan furniture factory"
  
  createChair(): Chair {
    return new VictoryanChair()
  }

  createCoffeTable(): Table {
    return new VictoryanTable()
  }
}

class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair()
  }

  createCoffeTable(): Table {
    return new ModernTable()
  }
}

class Application {
  static run(factory: FurnitureFactory) {
    const chair = factory.createChair()
    // const coffeTable = factory.createCoffeTable() 
  }
}

const buyVictoryan = Application.run(new VictoryanFurnitureFactory())
const buyModern = Application.run(new ModernFurnitureFactory())