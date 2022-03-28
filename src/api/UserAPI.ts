import BaseAPI from './BaseAPI'
import {
  UserEditProfile,
  UserEditPassword,
  UserSearch,
} from './apiInterfaces/userInterface'

class UserAPI extends BaseAPI {
  constructor() {
    super('/user')
  }

  editProfile(data: UserEditProfile): Promise<unknown> {
    return this.http.put('/profile', data)
  }

  userSearchByLogin(data: UserSearch) {
    return this.http.post('/search', data)
  }

  editPassword(data: UserEditPassword): Promise<unknown> {
    return this.http.put('/password', data)
  }
}

export default new UserAPI()
