import { ChatAPI } from '../api/ChatAPI'
import {
  CreateChatData,
  AddUsersToChatData,
} from '../api/apiInterfaces/chatInterface'
import { BadRequestData } from '../api/apiInterfaces/badRequestInterface'
import store from '../utils/store/Store'
import Router from '../utils/router/Router'
import validation from '../utils/validation/Validation'
import Socket from '../api/Socket'

class ChatController {
  private api: typeof ChatAPI

  private socket: typeof Socket

  constructor() {
    this.api = new ChatAPI()
    this.socket = Socket
  }

  async createNewChat(data: CreateChatData) {
    await this.api.createNewChat(data)
    this.getChats()
  }

  async sendMessage() {
    const form = document.querySelector('div.new-message-box div.input')
    const validationRes = validation.submit(form)
    if (validationRes.isValid) {
      const message = form?.querySelector('input.input_message')?.value
      try {
        const data = {
          content: message,
          type: 'message',
        }
        await this.socket.sendMessage(data)
        form.querySelector('input.input_message').value = ''
      } catch (err) {
        throw new Error('no answer sendMessage')
      }
    } else {
      throw new Error('form data not valid')
    }
  }

  async addUsersToChat(data: AddUsersToChatData) {
    await this.api.addUsersToChat(data)
  }

  async deleteUsersFromChat(data: AddUsersToChatData) {
    const response: BadRequestData | any = await this.api.deleteUsersFromChat(
      data
    )
    if (response.reason) {
      throw new Error(response.reason)
    }
  }

  async getChatToken() {
    try {
      const data: number = store.getState().currentChat.id
      await this.api.getChatToken(data)
      store.set('token', data.token)
      const dataReady = {
        userId: store.getState().currentUser?.id,
        chatId: store.getState().currentChat?.id,
        token: store.getState().token,
      }
      this.socket = new Socket(dataReady)
    } catch (err) {
      throw new Error('no answer getChatToken')
    }
  }

  async deleteChat(data: AddUsersToChatData) {
    const response: BadRequestData | any = await this.api.deleteChat(data)
    if (response.reason) {
      throw new Error(response.reason)
    }
    this.getChats()
  }

  async getChats() {
    try {
      const chats = await this.api.getChats()
      store.set('chats', chats)
    } catch (err) {
      throw new Error('no answer getChats')
    }
  }
}
const chatController = new ChatController()
export default chatController
