import Block from '../../utils/mainDOM/Block'
import tmpl from './chats.tmpl'
import router from '../../utils/router/Router'

export default class ChatPage extends Block {
  constructor() {
    super()
    this.setProps({
      goToSettings: this.goToSettingsHandler.bind(this),
      createNewChat: this.createNewChatHandler.bind(this),
    })
    this.setClickHandler()
  }

  goToSettingsHandler() {
    router.go('/settings')
  }

  setClickHandler() {
    const waitContentLoad = setInterval(() => {
      if (document.getElementById('create-new-chat-btn') !== null) {
        clearInterval(waitContentLoad)
        document.getElementById('create-new-chat-btn').addEventListener('click', this.createNewChatHandler)
      }
    }, 100)
  }

  createNewChatHandler() {
    console.log('createNewChatHandler')
  }

  render() {
    return tmpl
  }
}
