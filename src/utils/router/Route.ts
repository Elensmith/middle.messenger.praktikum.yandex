import Block from '../mainDOM/Block'
import renderDOM from '../mainDOM/renderDOM'
import isEqual from '../functions/isEqual'

type Props = { rootQuery: string }

// function isEqual(lhs: string, rhs: string) {
//   return lhs === rhs
// }
// function render(query: string, block: Block) {
//   const root = document.querySelector(query)
//   if (root !== null) {
//     root.textContent = block.getContent()
//   }
//   return root
// }

export default class Route {
  private _pathname: string

  private _blockClass: typeof Block

  private _block: Block | null

  private _props: any

  constructor(pathname: string, view: typeof Block, props: Props) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      this._block.hide()
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname)
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass()
      // render(this._props.rootQuery, this._block)
      // return
    }
    renderDOM('#root', this._block)
    // this._block.show()
  }
}
