import AuthAPI from '../api/AuthAPI'
import { SignupData, SigninData } from '../api/apiInterfaces/authInterface'
import store from '../utils/store/Store'
import Router from '../utils/Router'

class AuthController {
  private api: typeof AuthAPI

  constructor() {
    this.api = AuthAPI
  }

  async signUp(data: SignupData) {
    const response: any = await this.api.signUp(data)
    if (response.reason) {
      throw new Error(response.reason)
    }
  }

  async signIn(data: SigninData) {
    await this.api.signIn(data)
  }

  async logout() {
    await this.api.logout()
    Router.go('/signin')
  }

  async getUserInfo() {
    const userInfo = await this.api.getUserInfo()
    store.set('currentUser', userInfo)
  }
}

export default new AuthController()
