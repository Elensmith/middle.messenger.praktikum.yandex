import tmpl from './settings.tmpl'
import Block from '../../utils/mainDOM/Block'
import { User } from '../../utils/store/interfases/userInterface'
import router from '../../utils/router/Router'
import authController from '../../controllers/AuthController'
import userController from '../../controllers/UserController'

interface SettingsProps extends User {
  isNotEditable: boolean
  logout: () => void
  editUserData?: () => void
  saveUserData?: () => void
  editUserPassword?: () => void
  backToChat: () => void
}
export default class SettingsPage extends Block {
  private inputs: HTMLCollection

  constructor(props: SettingsProps, isNotEditable = true) {
    super({ ...props, isNotEditable })
    this.setReadonly()
    this.setProps({
      backToChat: this.backToChatHandler.bind(this),
      logout: this.logoutHandler.bind(this),
      editUserData: this.editUserDataHandler.bind(this),
      saveUserData: this.saveUserDataHandler.bind(this),
      editUserPassword: this.editUserPasswordHandler.bind(this),
      saveUserPassword: this.saveUserPasswordHandler.bind(this),
      editUserAvatar: this.editUserAvatarHandler.bind(this),
    })
  }

  setReadonly() {
    setTimeout(() => {
      this.inputs = document.getElementsByTagName('input')
      Array.from(this.inputs).forEach((input: HTMLInputElement) => {
        input.setAttribute('readonly', 'readonly')
      })
    }, 100)
  }

  editUserDataHandler() {
    this.removeReadonly()
    this.setProps({
      isNotEditable: false,
    })
  }

  editUserAvatarHandler() {
    this.setProps({
      inputLabel: 'выберите файл',
      modalTitle: 'Изменить аватар',
      buttonName: 'Сохранить',
    })
    document.querySelector('.modal-window').setAttribute('style', 'display: flex')
  }

  async saveUserPasswordHandler() {
    try {
      await userController.editPassword()
      this.setProps({
        isNotEditable: true,
        editPassword: false,
      })
      this.setReadonly()
    } catch (err) {
      console.log(err)
    }
  }

  editUserPasswordHandler() {
    console.log('editUserPasswordHandler')
    this.removeReadonly()
    this.setProps({
      editPassword: true,
      // isNotEditable: false,
    })
  }

  removeReadonly() {
    Array.from(this.inputs).forEach((input: HTMLInputElement) => {
      input.removeAttribute('readonly')
    })
  }

  render() {
    return tmpl
  }

  async logoutHandler() {
    try {
      await authController.logout()
    } catch (err) {
      console.log(err)
    }
  }

  backToChatHandler() {
    router.go('/messenger')
  }

  async saveUserDataHandler() {
    try {
      await userController.editProfile()
      this.setProps({
        isNotEditable: true,
      })
      this.setReadonly()
    } catch (err) {
      console.log(err)
    }
  }
}
