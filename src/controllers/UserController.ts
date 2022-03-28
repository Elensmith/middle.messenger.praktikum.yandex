import UserAPI from '../api/UserAPI'
import {
  UserEditPassword,
  UserEditProfile,
  UserSearch,
} from '../api/apiInterfaces/userInterface'
import store from '../utils/store/Store'
import validation from '../utils/validation/Validation'

class UserController {
  private api: typeof UserAPI

  constructor() {
    this.api = UserAPI
  }

  async editProfile() {
    const form = document.querySelector('form')
    const validationRes = validation.submit(form)
    if (validationRes.isValid) {
      try {
        const editedUserInfo = await this.api.editProfile(
          validationRes.objectData as UserEditProfile
        )
        store.set('currentUser', editedUserInfo)
      } catch (err) {
        throw new Error('no answer editProfile')
      }
    } else {
      throw new Error('form data not valid')
    }
  }

  async userSearchByLogin(data: UserSearch) {
    // const form = document.querySelector('form')
    // const validationRes = validation.submit(form)
    // if (validationRes.isValid) {
    try {
      const userId = await this.api.userSearchByLogin(data as User)
      console.log(userId)
      store.set('userId', userId)
    } catch (err) {
      throw new Error('no answer userSearchByLogin')
    }
    // } else {
    //   throw new Error('form data not valid')
    // }
  }

  async editPassword(data: UserEditPassword) {
    const response: any = await this.api.editPassword(data)
    if (response.reason) {
      throw new Error(response.reason)
    }
  }
}

const userController = new UserController()
export default userController
