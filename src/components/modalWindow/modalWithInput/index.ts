import Block from '../../../utils/mainDOM/Block'
import tmpl from './modalWithInput.tmpl'

interface ModalProps {
  title: string
  inputLabel: string
  buttonName: string
  modalWindowClose?: () => void
  saveClick?: () => void
}

export default class ModalWithInput extends Block {
  constructor({ ...props }: ModalProps) {
    super(props)
  }

  render(): string {
    return tmpl
  }
}
