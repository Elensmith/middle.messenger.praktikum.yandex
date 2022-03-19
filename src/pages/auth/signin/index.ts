import Block from '../../../utils/Block'
import tmpl from './signin.tmpl'
// import store, { StoreEvents } from '../../../'
import Validation from '../../../utils/Validation'
import Router from '../../../utils/Router'
import AuthController from '../../../controllers/AuthController'
import { SigninData } from '../../../api/apiInterfaces/authInterface'

export default class SigninPage extends Block {
  constructor() {
    super()
    this.setProps({
      signInClick: this.signInClickHandler.bind(this),
      goSignUp: this.goSignUpClickHandler.bind(this),
    })
  }

  async signInClickHandler(e: PointerEvent) {
    e.preventDefault()
    console.log('dddddd')
    const validationRes = Validation.submit()
    if (validationRes.isValid) {
      try {
        await AuthController.signIn(validationRes.objectData as SigninData)
        Router.go('/messenger')
      } catch (err) {
        console.log(err)
      }
    }
  }

  goSignUpClickHandler() {
    Router.go('/signup')
  }

  render() {
    return tmpl
  }
}
