import Block from '../../utils/mainDOM/Block'
import tmpl from './chats.tmpl'
import router from '../../utils/router/Router'
import chatController from '../../controllers/ChatController'
import store, { StoreEvents } from '../../utils/store/Store'
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
    router.go('/settings')
  }

  deleteChatHandler() {
    const chat = store.getState().currentChat
    console.log(chat)
    const data = {
      chatId: chat.id,
    }
    chatController.deleteChat(data)
  }

  sendMessageHandler(event: PointerEvent) {
    event.preventDefault()
    console.log('sendMessageHandler')
    chatController.sendMessage()
  }

  addContentToMessageHandler(event: PointerEvent) {
    event.preventDefault()
    console.log('addContentToMessageHandler')
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
    console.log('showMoreInfoMenuHandler')
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
    // setTimeout(() => {
    // console.log(store.getState().currentChat, 'store.getState()')
    // }, 1000)
  }

  saveModalBtnHander(event: PointerEvent) {
    console.log('saveModalBtnHander')
    const modalTitle = document.querySelector('.modal-window h2')?.textContent
    const inputValue = {
      title: document.querySelector('.modal-window input').value,
    }
    if (modalTitle === 'Создать чат') {
      chatController.createNewChat(inputValue)
    } else if (modalTitle === 'Удалить пользователя') {
      // const data = {
      //   users: [0],
      //   chatId: store.getState().currentChat.id,
      // }
    } else if (modalTitle === 'Добавить пользователя') {
      console.log('wwww')
      const data = {
        login: inputValue.title,
      }
      console.log(data, 'data')
      userController.userSearchByLogin(data).then(() => {
        const { userId } = store.getState()
        console.log(userId, 'userId')
        if (userId) {
          const userToChat = {
            users: userId.map((el) => el.id),
            chatId: store.getState().currentChat.id,
          }
          console.log(userToChat, 'userToChat')
          chatController.addUsersToChat(userToChat)
        }
      })
    }
    this.modalWindowCloseHandler(event)
  }

  modalWindowCloseHandler(event: PointerEvent) {
    console.log('modalWindowCloseHandler')
    const modal = event.target.closest('.modal-window')
    const input = modal.querySelector('input')
    input.value = ''
    modal.setAttribute('style', 'display: none')
  }

  createNewChatHandler(e) {
    console.log('createNewChatHandler')
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
