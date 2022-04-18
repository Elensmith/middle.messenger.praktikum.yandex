import BaseAPI from './BaseAPI'
import {
  CreateChatData,
  AddUsersToChatData,
} from './apiInterfaces/chatInterface'

export class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats')
  }

  createNewChat(data: CreateChatData): Promise<unknown> {
    return this.http.post('/', data)
  }

  addUsersToChat(data: AddUsersToChatData): Promise<unknown> {
    return this.http.put('/users', data)
  }

  getChatToken(data: number): Promise<unknown> {
    return this.http.post(`/token/${data}`)
  }

  deleteUsersFromChat(data: AddUsersToChatData): Promise<unknown> {
    return this.http.delete('/users', data)
  }

  deleteChat(data: AddUsersToChatData): Promise<unknown> {
    return this.http.delete('/chats', data)
  }

  getChats() {
    return this.http.get('/')
  }
}
