import UserAPI from '../api/UserAPI'
import {
  UserEditPassword,
  UserEditProfile,
} from '../api/apiInterfaces/userInterface'
import store from '../utils/store/Store'
// import Router from '../utils/Router'

class UserController {
  private api: typeof UserAPI

  constructor() {
    this.api = UserAPI
  }

  async editProfile(data: UserEditProfile) {
    const editedUserInfo = await this.api.editProfile(data)
    store.set('currentUser', editedUserInfo)
  }

  async editPassword(data: UserEditPassword) {
    const response: any = await this.api.editPassword(data)
    if (response.reason) {
      throw new Error(response.reason)
    }
  }
}

export default new UserController()
