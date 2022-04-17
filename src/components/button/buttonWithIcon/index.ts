import Block from '../../../utils/mainDOM/Block'
import tmpl from './buttonWithIcon.tmpl'

interface ButtonWithIconProps {
  onClick?: () => void
  iconClass?: string
  buttonClass: string
  iconSrc: string
}
export default class ButtonWithIcon extends Block {
  constructor({
    buttonClass,
    iconClass,
    iconSrc,
    onClick,
  }: ButtonWithIconProps) {
    super({ buttonClass, iconClass, iconSrc, events: { click: onClick } })
  }

  render(): string {
    return tmpl
  }
}
