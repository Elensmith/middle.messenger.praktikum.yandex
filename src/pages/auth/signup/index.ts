import Block from '../../../utils/Block'
import tmpl from './signup.tmpl'
import Validation from '../../../utils/Validation'
import Router from '../../../utils/Router'
import AuthController from '../../../controllers/AuthController'
import { SignupData } from '../../../api/apiInterfaces/authInterface'

export default class SignupPage extends Block {
  constructor() {
    super()
    this.setProps({
      goSignIn: this.goSignInClickHandler.bind(this),
      signUpClick: this.signUpClickHandler.bind(this),
    })
  }

  render() {
    return tmpl
  }

  async signUpClickHandler(e: PointerEvent) {
    e.preventDefault()
    const validationRes = Validation.submit()
    if (validationRes.isValid) {
      console.log(validationRes, 'isValid')
      // const data: Record<string, unknown> = {}
      try {
        await AuthController.signUp(validationRes.objectData as SignupData)
      } catch (err) {
        console.log(err)
      }
    }
  }

  goSignInClickHandler() {
    Router.go('/signin')
  }
}
