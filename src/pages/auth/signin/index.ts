import Block from '../../../utils/mainDOM/Block'
import tmpl from './signin.tmpl'
import store from '../../../utils/store/Store'
import validation from '../../../utils/validation/Validation'
import router from '../../../utils/router/Router'
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
    const form = document.querySelector('form')
    const validationRes = validation.submit(form)
    if (validationRes.isValid) {
      try {
        await authController.signIn(validationRes.objectData as SigninData)
        router.go('/messenger')
      } catch (err) {
        if (err.reason) {
          store.set('errorMessage', err.reason)
        }
        console.log(err)
      }
    }
  }

  goSignUpClickHandler() {
    router.go('/signup')
  }

  render() {
    return tmpl
  }
}
