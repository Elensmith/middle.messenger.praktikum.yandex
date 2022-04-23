import Block from '../../../utils/mainDOM/Block'
import tmpl from './buttonWithIcon.tmpl'

interface ButtonWithIconProps {
  onClick?: () => void
  iconClass?: string
  buttonClass: string
  iconSrc: string
}
export default class ButtonWithIcon extends Block {
  constructor({ onClick, ...props }: ButtonWithIconProps) {
    super({ ...props, events: { click: onClick } })
  }

  render(): string {
    return tmpl
  }
}
