import BaseAPI from './BaseAPI'
import {
  UserEditProfile,
  UserEditPassword,
} from './apiInterfaces/userInterface'

class UserAPI extends BaseAPI {
  constructor() {
    super('/user')
  }

  editProfile(data: UserEditProfile): Promise<unknown> {
    return this.http.put('/profile', data)
  }

  editPassword(data: UserEditPassword): Promise<unknown> {
    return this.http.put('/password', data)
  }
}

export default new UserAPI()
