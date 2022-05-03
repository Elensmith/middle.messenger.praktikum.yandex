import tmpl from './settings.tmpl'
import Block from '../../utils/mainDOM/Block'
import { User } from '../../utils/store/interfases/storeInterface'
import router from '../../utils/router/Router'
import authController from '../../controllers/AuthController'
import userController from '../../controllers/UserController'
import store from '../../utils/store/Store'

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

  url: string

  constructor(props: SettingsProps, isNotEditable = true) {
    super({ ...props, isNotEditable })
    this.url = 'https://ya-praktikum.tech/api/v2/resources'
    this.setReadonly()
    console.log(`${this.url}${props.avatar}`, 'props.avatar')
    this.setProps({
      avatar: `${this.url}${props.avatar}`,
      backToChat: this.backToChatHandler.bind(this),
      logout: this.logoutHandler.bind(this),
      editUserData: this.editUserDataHandler.bind(this),
      saveUserData: this.saveUserDataHandler.bind(this),
      editUserPassword: this.editUserPasswordHandler.bind(this),
      saveUserPassword: this.saveUserPasswordHandler.bind(this),
      editUserAvatar: this.editUserAvatarHandler.bind(this),
      saveModalBtn: this.saveModalBtnHandler.bind(this),
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
      inputLabel: '',
      modalTitle: 'Изменить аватар',
      buttonName: 'Сохранить',
    })
    const modal = document.querySelector('.modal-window')
    modal?.setAttribute('style', 'display: flex')
    modal?.querySelector('input')?.setAttribute('type', 'file')
    modal?.querySelector('input')?.setAttribute('name', 'avatar')
  }

  async saveModalBtnHandler() {
    try {
      await userController.editAvatar()
      const modal = document.querySelector('.modal-window')
      modal?.setAttribute('style', 'display: none')
      authController.getUserInfo().then(() => {
        this.setProps({
          avatar: `${this.url}${store.getState().currentUser.avatar}`,
        })
      })
    } catch (err) {
      console.log(err)
    }
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
    this.removeReadonly()
    this.setProps({
      editPassword: true,
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
