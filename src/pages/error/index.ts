import Block from '../../utils/mainDOM/Block'
import tmpl from './error.tmpl'

export default class ErrorPage extends Block {
  constructor() {
    super()
    this.setProps({
      onClick: this.clickHandler.bind(this),
      errorText: this.setErrorText.bind(this),
      errorCode: '404',
    })
  }

  clickHandler() {
    console.log('clickHandler ErrorPage')
  }

  setErrorText() {
    return 'Ошибочка вышла'
  }

  render() {
    return tmpl
  }
}
