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
    try {
      const userId = await this.api.userSearchByLogin(data as User)
      console.log(userId)
      store.set('userId', userId)
    } catch (err) {
      throw new Error('no answer userSearchByLogin')
    }
  }

  async editAvatar() {
    const inputData = document.querySelector('div.modal-window input')
    console.log(inputData.files[0], 'inputData')
    const formData = new FormData()

    formData.append('avatar', inputData.files[0])
    console.log(formData, 'formData')
    try {
      await this.api.editAvatar(formData)
    } catch (err) {
      throw new Error('no answer editAvatar')
    }
  }

  async editPassword() {
    const form = document.querySelector('form')
    const validationRes = validation.submit(form)
    console.log(validationRes, 'validationRes')
    if (validationRes.isValid) {
      try {
        const data = {
          oldPassword: validationRes.objectData.oldPassword,
          newPassword: validationRes.objectData.password,
        }
        await this.api.editPassword(data as UserEditPassword)
      } catch (err) {
        alert('ошибка сохранения пароля')
        throw new Error('no answer editProfile')
      }
    } else {
      throw new Error('form data not valid')
    }
  }
}

const userController = new UserController()
export default userController
