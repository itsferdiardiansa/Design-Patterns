class Prototype {
  color!: string
  positionX: number = 0
  positionY: number = 0

  clone() {
    // Create a new object from this object
    const clone = Object.create(this)

    return clone
  }
}


function clientCode() {
  const p1 = new Prototype()
  p1.color = "red"
  p1.positionX = 10
  p1.positionY = 12
  
  const p2 = p1.clone()

  // this should be similar as we just cloned p1 an then assigned to p2
  // p1.color === p2.color
  // p1.positionX === p2.positionX
  // p1.positionY === p2.positionY
}