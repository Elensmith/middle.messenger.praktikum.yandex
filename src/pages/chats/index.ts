import Block from '../../utils/Block'
import tmpl from './chats.tmpl'
import Router from '../../utils/Router'

export default class ChatPage extends Block {
  constructor() {
    super()
    this.setProps({
      goToSettings: this.goToSettingsClickHandler.bind(this),
      // selectedUserName: 'Ira',
      // selectedUserAvatar:
      //   'https://kulturakumertau.ru/wp-content/uploads/3/f/4/3f47f7753e4c02145f5b3c66983ee127.jpeg',
    })
  }

  goToSettingsClickHandler() {
    Router.go('/settings')
  }

  render() {
    return tmpl
  }
}
