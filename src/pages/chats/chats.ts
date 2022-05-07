import Block from '../../utils/mainDOM/Block'
import tmpl from './chats.tmpl'
import router from '../../utils/router/Router'
import chatController from '../../controllers/ChatController'
import store from '../../utils/store/Store'
import userController from '../../controllers/UserController'

export default class ChatPage extends Block {
  private chatSelected: boolean

  constructor() {
    super()
    this.chatSelected = false
    this.setProps({
      goToSettings: this.goToSettingsHandler.bind(this),
      createNewChat: this.createNewChatHandler.bind(this),
      saveModalBtn: this.saveModalBtnHander.bind(this),
      modalWindowClose: this.modalWindowCloseHandler.bind(this),
      sendMessage: this.sendMessageHandler.bind(this),
      addContentToMessage: this.addContentToMessageHandler.bind(this),
      showMoreInfoMenu: this.showMoreInfoMenuHandler.bind(this),
      deleteChat: this.deleteChatHandler.bind(this),
      addUser: this.addUserHandler.bind(this),
      removeUser: this.removeUserHandler.bind(this),
      buttonName: 'Сохранить',
    })
  }

  goToSettingsHandler() {
    store.set('messages', [])
    router.go('/settings')
  }

  deleteChatHandler() {
    const chat = store.getState().currentChat
    const data = {
      chatId: chat.id,
    }
    chatController.deleteChat(data)
  }

  sendMessageHandler(event: PointerEvent) {
    event.preventDefault()
    chatController.sendMessage()
  }

  addContentToMessageHandler(event: PointerEvent) {
    event.preventDefault()
  }

  addUserHandler() {
    this.setProps({
      inputLabel: 'логин',
      modalTitle: 'Добавить пользователя',
    })
    document
      .querySelector('.modal-window')
      .setAttribute('style', 'display: flex')
  }

  removeUserHandler() {
    this.setProps({
      inputLabel: 'логин',
      modalTitle: 'Удалить пользователя',
    })
    document
      .querySelector('.modal-window')
      .setAttribute('style', 'display: flex')
  }

  showMoreInfoMenuHandler(event: PointerEvent) {
    event.preventDefault()
    const chatMenu = document.querySelector('.chat__menu')
    if (chatMenu.hasAttribute('style')) {
      const value = chatMenu.getAttribute('style')
      if (value === 'display: block') {
        chatMenu.setAttribute('style', 'display: none')
      } else {
        chatMenu.setAttribute('style', 'display: block')
      }
    } else {
      chatMenu.setAttribute('style', 'display: block')
    }
  }

  saveModalBtnHander(event: PointerEvent) {
    let modalTitle = ''
    let inputValueTitle = ''
    const modal = document.querySelector('.modal-window h2')
    if (modal !== null) modalTitle = modal.textContent
    const modalInput = document.querySelector('.modal-window input')
    if (modalInput !== null) inputValueTitle = modalInput.value
    const inputValue = {
      title: inputValueTitle,
    }
    if (modalTitle === 'Создать чат') {
      chatController.createNewChat(inputValue)
    } else if (modalTitle === 'Удалить пользователя') {
      console.log('добавить удаление юзера ')
    } else if (modalTitle === 'Добавить пользователя') {
      const loginValue = {
        login: inputValue.title,
      }
      userController.userSearchByLogin(loginValue).then(() => {
        const { userId } = store.getState()
        if (userId) {
          const userToChat = {
            users: userId.map((el) => el.id),
            chatId: store.getState().currentChat.id,
          }
          chatController.addUsersToChat(userToChat)
        }
      })
    }
    this.modalWindowCloseHandler(event)
  }

  modalWindowCloseHandler(event: PointerEvent) {
    const modal = event.target.closest('.modal-window')
    const input = modal.querySelector('input')
    input.value = ''
    modal.setAttribute('style', 'display: none')
  }

  createNewChatHandler(e) {
    this.setProps({
      inputLabel: 'название чата',
      modalTitle: 'Создать чат',
    })
    document
      .querySelector('.modal-window')
      .setAttribute('style', 'display: flex')
  }

  render() {
    return tmpl
  }
}
