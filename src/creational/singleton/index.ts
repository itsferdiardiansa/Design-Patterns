class Database {
  private static instance: Database

  private constructor() {
    // Setup a configurtaion ...

    // Try connecting to database server ...
  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new Database()
    }

    return Database.instance
  }
}

const database   = Database.getInstance() // Only create a single object
const database2  = Database.getInstance() // Just use a previous object without making anew object
// const database3 = new Database() // Constructor of class 'Database' is private and only accessible within the class declaration.
