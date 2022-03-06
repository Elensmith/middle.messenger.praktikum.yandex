import Block from '../utils/Block'
import tmpl from './input.tmpl'

interface InputProps {
  labelText: string
  readonly: boolean
  classInput: string
  inputName?: string
  type?: string
  pattern?: RegExp
  valueData?: string
  placeholder: string
  error?: string
  onBlur?: () => void
  onFocus?: () => void
  // events?: {
  //   click?: () => void
  // }
  onClick?: () => void
}
export default class Input extends Block {
  constructor({ ...props }: InputProps) {
    super(props)
  }

  render(): string {
    return tmpl
  }
}
