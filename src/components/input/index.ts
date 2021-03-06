import Block from '../../utils/mainDOM/Block'
import tmpl from './input.tmpl'
import validation from '../../utils/validation/Validation'

interface InputProps {
  labelText: string
  classInput?: string
  inputName?: string
  typeName?: string
  valueData?: string
  error?: string
  // onBlur?: () => void
  // onFocus?: () => void
}
export default class Input extends Block {
  constructor({ ...props }: InputProps) {
    super({
      ...props,
      events: {
        focusin: (event: PointerEvent) => {
          if (!event.target.hasAttribute('readonly')) {
            validation.validateInput(event.target)
          }
        },
      },
    })
  }

  render(): string {
    return tmpl
  }
}
