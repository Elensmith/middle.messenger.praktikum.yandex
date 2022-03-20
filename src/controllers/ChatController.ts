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
  // async signUp(data: SignupData) {
  //   const response: any = await this.api.signUp(data)
  //   if (response.reason) {
  //     throw new Error(response.reason)
  //   }
  // }

  // async signIn(data: SigninData) {
  //   await this.api.signIn(data)
  // }

  // async logout() {
  //   await this.api.logout()
  //   Router.go('/signin')
  // }

  // async getUserInfo() {
  //   const userInfo = await this.api.getUserInfo()
  //   store.set('currentUser', userInfo)
  // }
}
const chatController = new ChatController()
export default chatController
