type RoleAccess = "all-access" | "front-access" | "kitchen-access"

interface RoleInterface {
  name: string
  access: RoleAccess
  
  runTask: () => void
  logging: () => void
}

abstract class AbstractRole implements RoleInterface {
  abstract name: string
  abstract access: RoleAccess

  abstract runTask(): void

  logging(): void {
    console.log("Logging")
  }
}

class Role extends AbstractRole {
  constructor(public name: string, public access: RoleAccess) {
    super()
  }

  runTask() {
    console.log("Task is running")
  }
}

// To use the factory pattern, we need to create a class called RoleFactory
class RoleFactory {
  static createRole(...params: ConstructorParameters<typeof Role>) {
    return new Role(...params)
  }
}

// Without factory pattern
const person = new Role("Jake", "all-access")
const person2 = new Role("Sam", "front-access")

// // With factory pattern
const personA = RoleFactory.createRole("Allan", "all-access")
const personB = RoleFactory.createRole("James", "kitchen-access")