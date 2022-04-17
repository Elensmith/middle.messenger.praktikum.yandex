import Block from '../mainDOM/Block'
import renderDOM from '../mainDOM/renderDOM'
import isEqual from '../functions/isEqual'

type Props = { rootQuery: string }

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
      this._block.getContent().remove()
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname)
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass()
    }
    renderDOM('#root', this._block)
  }
}
