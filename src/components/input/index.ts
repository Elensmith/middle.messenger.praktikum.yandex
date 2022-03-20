import Block from '../../utils/mainDOM/Block'
import tmpl from './input.tmpl'

interface InputProps {
  labelText: string
  // readonly?: boolean
  classInput?: string
  inputName?: string
  type?: string
  valueData?: string
  error?: string
  onBlur?: () => void
  onFocus?: () => void
}
export default class Input extends Block {
  constructor({ ...props }: InputProps) {
    super(props)
  }

  render(): string {
    return tmpl
  }
}
