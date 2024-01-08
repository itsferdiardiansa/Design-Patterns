abstract class Component {
  protected parent!: Component | null

  setParent(parent: Component | null) {
    this.parent = parent
  }

  getParent() {
    return this.parent
  }

  add(component: Component): void {}

  remove(component: Component): void {}

  isComposite() {
    return true
  }

  abstract operation(): string
}


class Leaf extends Component {
  operation() {
    return "Leaf"
  }
}


class Composite extends Component {
  private children: Component[] = []

  add(component: Component) {
    this.children.push(component)
    component.setParent(this)
  }

  remove(component: Component) {
    const componentIndex = this.children.indexOf(component)

    this.children.splice(componentIndex, 1)
    component.setParent(null)
  }

  isComposite(): boolean {
    return true
  }

  operation(): string {
    const results = []

    for (const child of this.children) {
      results.push(child.operation())
    }

    return `Branch(${results.join(" + ")})`
  }
}

const branch = new Composite()
branch.add(new Leaf())
branch.add(new Leaf())
branch.add(new Leaf())

console.log(branch.operation())