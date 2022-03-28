import ChatAPI from '../api/ChatAPI'
import { CreateChatData, AddUsersToChatData } from '../api/apiInterfaces/chatInterface'
import { BadRequestData } from '../api/apiInterfaces/badRequestInterface'
import store from '../utils/store/Store'
import Router from '../utils/router/Router'

class ChatController {
  private api: typeof ChatAPI

  constructor() {
    this.api = ChatAPI
  }

  async createNewChat(data: CreateChatData) {
    await this.api.createNewChat(data)
    this.getChats()
  }

  async addUsersToChat(data: AddUsersToChatData) {
    await this.api.addUsersToChat(data)
  }

  async deleteUsersFromChat(data: AddUsersToChatData) {
    const response: BadRequestData | any = await this.api.deleteUsersFromChat(data)
    if (response.reason) {
      throw new Error(response.reason)
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
      console.log(chats, 'chats')
      store.set('chats', chats)
    } catch (err) {
      throw new Error('no answer getChats')
    }
  }
}
const chatController = new ChatController()
export default chatController
