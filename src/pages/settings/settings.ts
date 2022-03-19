import tmpl from './settings.tmpl'
import Block from '../../utils/Block'
import { User } from '../../utils/store/interfases/userInterface'
import Router from '../../utils/Router'
import AuthController from '../../controllers/AuthController'

interface SettingsProps extends User {
  isNotEditable: boolean
  logout: () => void
  editUserData?: () => void
  saveUserData?: () => void
  editUserPassword?: () => void
  backToChat: () => void
}
export default class SettingsPage extends Block {
  private inputs: any = []

  constructor(props: SettingsProps, isNotEditable = true) {
    super({ ...props, isNotEditable })
    this.setReadonly()
    this.setProps({
      backToChat: this.backToChatClickHandler.bind(this),
      logout: this.logoutClickHandler.bind(this),
      editUserData: this.editUserDataClickHandler.bind(this),
    })
  }

  setReadonly() {
    setTimeout(() => {
      this.inputs = document.getElementsByTagName('input')
      Array.from(this.inputs).forEach((input) => {
        input.setAttribute('readonly', 'readonly')
      })
    }, 100)
  }

  editUserDataClickHandler() {
    this.removeReadonly()
    this.setProps({
      isNotEditable: false,
    })
  }

  removeReadonly() {
    Array.from(this.inputs).forEach((input) => {
      input.removeAttribute('readonly')
    })
  }

  render() {
    return tmpl
  }

  async logoutClickHandler() {
    try {
      await AuthController.logout()
    } catch (err) {
      console.log(err)
    }
  }

  backToChatClickHandler() {
    Router.go('/messenger')
  }
}
