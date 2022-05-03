import { UserAPI } from '../api/UserAPI'
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
    this.api = new UserAPI()
  }

  async editProfile() {
    const form: HTMLFormElement | null = document.querySelector('#userSettings')
    if (form !== null) {
      const validationRes = validation.submit(form)
      if (validationRes.isValid) {
        try {
          const editedUserInfo = await this.api.editProfile(
            validationRes.objectData
          )
          store.set('currentUser', editedUserInfo)
        } catch (err) {
          throw new Error('no answer editProfile')
        }
      } else {
        throw new Error('form data not valid')
      }
    }
  }

  async userSearchByLogin(data: UserSearch) {
    try {
      const userId = await this.api.userSearchByLogin(data as User)
      store.set('userId', userId)
    } catch (err) {
      throw new Error('no answer userSearchByLogin')
    }
  }

  async editAvatar() {
    const inputData = document.querySelector('div.modal-window input')
    const formData = new FormData()

    formData.append('avatar', inputData.files[0])
    try {
      await this.api.editAvatar(formData)
    } catch (err) {
      throw new Error('no answer editAvatar')
    }
  }

  async editPassword() {
    let validationRes
    const form = document.querySelector('#userSettings')
    if (form !== null) {
      validationRes = validation.submit(form)
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
}

const userController = new UserController()
export default userController
