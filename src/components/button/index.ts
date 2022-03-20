import Block from '../../utils/mainDOM/Block'
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
    super({ title, className, events: { click: onClick } })
  }

  render(): string {
    return tmpl
  }
}
