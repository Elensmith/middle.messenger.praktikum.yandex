import Block from '../../../utils/mainDOM/Block'
import tmpl from './signin.tmpl'
// import store, { StoreEvents } from '../../../'
import validation from '../../../utils/validation/Validation'
import Router from '../../../utils/router/Router'
import authController from '../../../controllers/AuthController'
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
    const validationRes = validation.submit()
    if (validationRes.isValid) {
      try {
        await authController.signIn(validationRes.objectData as SigninData)
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
