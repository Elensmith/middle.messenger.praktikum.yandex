import Block from '../../../utils/mainDOM/Block'
import tmpl from './button.tmpl'

interface ButtonProps {
  title: string
  className?: string
  onClick?: () => void
}
export default class Button extends Block {
  constructor({ onClick, ...props }: ButtonProps) {
    super({ ...props, events: { click: onClick } })
  }

  render(): string {
    return tmpl
  }
}
