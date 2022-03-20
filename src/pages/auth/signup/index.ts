import Block from '../../../utils/mainDOM/Block'
import tmpl from './signup.tmpl'
import validation from '../../../utils/validation/Validation'
import router from '../../../utils/router/Router'
import authController from '../../../controllers/AuthController'
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
    const validationRes = validation.submit()
    if (validationRes.isValid) {
      console.log(validationRes, 'isValid')
      // const data: Record<string, unknown> = {}
      try {
        await authController.signUp(validationRes.objectData as SignupData)
      } catch (err) {
        console.log(err)
      }
    }
  }

  goSignInClickHandler() {
    router.go('/signin')
  }
}
