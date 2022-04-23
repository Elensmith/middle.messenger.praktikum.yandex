import Block from '../../utils/mainDOM/Block'
import tmpl from './form-error-message.tmpl'

interface FormErrorMessageProps {
  errorText?: string
}
export default class ErrorMessage extends Block {
  constructor(props: FormErrorMessageProps) {
    super({ ...props })
  }

  render(): string {
    return tmpl
  }
}
