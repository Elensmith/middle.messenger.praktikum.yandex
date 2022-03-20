import BaseAPI from './BaseAPI'
import {
  CreateChatData,
  AddUsersToChatData,
} from './apiInterfaces/chatInterface'

class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats')
  }

  createNewChat(data: CreateChatData): Promise<unknown> {
    return this.http.post('/', data)
  }

  addUsersToChat(data: AddUsersToChatData): Promise<unknown> {
    return this.http.put('/users', data)
  }

  deleteUsersFromChat(data: AddUsersToChatData): Promise<unknown> {
    return this.http.delete('/users', data)
  }
}

export default new ChatAPI()
