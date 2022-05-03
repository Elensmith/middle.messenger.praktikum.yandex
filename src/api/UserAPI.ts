import BaseAPI from './BaseAPI'
import {
  UserEditProfile,
  UserEditPassword,
  UserSearch,
} from './apiInterfaces/userInterface'

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user')
  }

  editProfile(data: UserEditProfile): Promise<unknown> {
    console.log(data, 'data')
    return this.http.put('/profile', data)
  }

  editAvatar(data: File) {
    return this.http.put('/profile/avatar', data)
  }

  userSearchByLogin(data: UserSearch) {
    return this.http.post('/search', data)
  }

  editPassword(data: UserEditPassword): Promise<unknown> {
    return this.http.put('/password', data)
  }
}
