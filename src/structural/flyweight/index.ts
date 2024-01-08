class TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string
  ) {}

  draw() {}
}

class TreeFactory {
  static treeTypes: TreeType[] = []

  static getTreeType(name: string, color: string, texture: string) {
    let type = TreeFactory.treeTypes.find(treeType => treeType.name === name)

    if (!type) {
      type = new TreeType(name, color, texture)
      TreeFactory.treeTypes.push(type)
    }

    console.log("treeTypes: ", TreeFactory.treeTypes)
    return type
  } 
}

class Tree {
  constructor(
    public x: number, 
    public y: number,
    public type: TreeType
  ) {}

  draw() {}
}

class Forest {
  trees: Tree[] = []

  planTree(
    x: number, 
    y: number, 
    name: string, 
    color: string, 
    texture: string
  ) {
    let type = TreeFactory.getTreeType(name, color, texture)
    let tree = new Tree(x, y, type)

    this.trees.push(tree)
  }

  draw() {}
}

const area = new Forest()

area.planTree(11, 23, "Forest", "black", "smoth")
area.planTree(44, 2, "Bridge", "red", "rough")
area.planTree(.5, -10, "Air", "transparent", "light")
area.planTree(11, 23, "Forest", "black", "smoth")
area.planTree(11, 23, "Forest", "black", "smoth")