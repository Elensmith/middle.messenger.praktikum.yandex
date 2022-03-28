import { nanoid } from 'nanoid'
import * as Handlebars from 'handlebars'
import EventBus from './EventBus'
import validation from '../validation/Validation'

export default class Block {
  private static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  }

  private _element: any | null = null

  public id = nanoid(6)

  protected props: any

  private eventBus: () => EventBus

  protected children: { [id: string]: Block } = {}

  private _meta: { props: any }

  /** JSDoc
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(props: any = {}) {
    const eventBus = new EventBus()
    this._meta = {
      props,
    }
    this.eventBus = () => eventBus
    this.initChildren()
    this.props = this._makePropsProxy(props)
    this._registerEvents(eventBus)
    eventBus.emit(Block.EVENTS.INIT)
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this.componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  initChildren() {}

  private _componentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidMount() {}

  private _componentDidUpdate(oldProps: string, newProps: string) {
    const response = this.componentDidUpdate(oldProps, newProps)
    if (!response) {
      return
    }
    this._render()
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: string, newProps: string) {
    return true
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return
    }
    Object.assign(this.props, nextProps)
    // validation.activate()
  }

  compile() {
    const fragment = this._createDocumentElement(
      'template'
    ) as HTMLTemplateElement
    const template = Handlebars.compile(this.render())
    const htmlString = template({ ...this.props, children: this.children })

    fragment.innerHTML = htmlString

    Object.entries(this.children).forEach(([key, component]) => {
      const stub = fragment.content.querySelector(
        `[data-id="id-${component.id}"]`
      )
      if (!stub) {
        return
      }
      stub.replaceWith(component.getContent())
    })
    return fragment.content
  }

  get element() {
    return this._element
  }

  private _render() {
    const fragment = this.compile()

    this._removeEvents()
    const newElement = fragment.firstElementChild
    if (this._element !== null) this._element.replaceWith(newElement)

    this._element = newElement as HTMLElement
    this._addEvents()
  }

  // Может переопределять пользователь, необязательно трогать
  protected render(): string {
    return ''
  }

  getContent() {
    return this.element
  }

  _removeEvents() {
    const { events } = this.props as any
    if (!events || !this._element) {
      return
    }
    Object.entries(events).forEach(([event, listener]) => {
      this._element.removeEventListener((event, listener))
    })
  }

  private _makePropsProxy(props: any = {}) {
    const self = this
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target, prop: string, val) {
        const oldProps = { ...target }
        target[prop] = val
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target)
        return true
      },
      deleteProperty() {
        throw new Error('Нет доступа')
      },
    })
  }

  // eslint-disable-next-line class-methods-use-this
  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName)
  }

  _addEvents() {
    const { events } = this.props as any
    if (!events) {
      return
    }
    Object.entries(events).forEach(([event, listener]) => {
      if (typeof listener === 'function') {
        this._element.addEventListener(event, listener)
      }
    })
  }

  show(): void {
    this.getContent().style.display = 'block'
  }

  hide(): void {
    this.getContent().style.display = 'none'
  }
}
