// import * as Handlebars from 'handlebars'
// import tmpl from './button.tmpl'

// const template = Handlebars.compile(tmpl)
// const makeTemp = (data: object) => template(data)

// export default makeTemp

import Block from '../utils/Block'
import tmpl from './button.tmpl'

interface ButtonProps {
  title: string
  className?: string
  // events?: {
  //   click?: () => void
  // }
  onClick?: () => void
}
export default class Button extends Block {
  constructor({ title, className, onClick }: ButtonProps) {
    // Создаём враппер дом-элемент button
    super({ title, className, events: { click: onClick } })
  }

  render(): string {
    return tmpl
  }
}
