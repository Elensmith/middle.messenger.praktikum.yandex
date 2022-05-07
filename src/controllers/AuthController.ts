import { AuthAPI } from '../api/AuthAPI'
import { SignupData, SigninData } from '../api/apiInterfaces/authInterface'
import store from '../utils/store/Store'
import router from '../utils/router/Router'

class AuthController {
  private _api: typeof AuthAPI

  constructor() {
    this._api = new AuthAPI()
  }

  async signUp(data: SignupData) {
    const response: any = await this._api.signUp(data)
    this.getUserInfo()
    router.go('/messenger')
    if (response.reason) {
      throw new Error(response.reason)
    }
  }

  async signIn(data: SigninData) {
    await this._api.signIn(data)
  }

  async logout() {
    await this._api.logout()
    router.go('/signin')
  }

  async getUserInfo() {
    const userInfo = await this._api.getUserInfo()
    store.set('currentUser', userInfo)
  }
}
const authController = new AuthController()
export default authController
