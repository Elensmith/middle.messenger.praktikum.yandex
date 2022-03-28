import Block from '../../utils/mainDOM/Block'
import tmpl from './error.tmpl'

export default class ErrorPage extends Block {
  constructor() {
    super()
    this.setProps({
      onClick: this.clickHandler.bind(this),
      errorCode: this.setErrorCode.bind(this),
      errorText: this.setErrorText.bind(this),
    })
  }

  clickHandler() {
    console.log('clickHandler ErrorPage')
  }

  setErrorText() {
    return 'Ошибочка вышла'
  }

  setErrorCode() {
    return 404
  }

  render() {
    return tmpl
  }
}
