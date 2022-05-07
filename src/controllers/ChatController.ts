import { ChatAPI } from '../api/ChatAPI'
import {
  CreateChatData,
  AddUsersToChatData,
} from '../api/apiInterfaces/chatInterface'
import { BadRequestData } from '../api/apiInterfaces/badRequestInterface'
import store from '../utils/store/Store'
import validation from '../utils/validation/Validation'
import Socket from '../api/Socket'

interface Token {
  token: string
}

class ChatController {
  private _api: ChatAPI

  private _socket: Socket

  constructor() {
    this._api = new ChatAPI()
    this._socket = Socket
  }

  async createNewChat(data: CreateChatData) {
    await this._api.createNewChat(data)
    this.getChats()
  }

  async sendMessage() {
    let validationRes
    let inputValue
    const form = document.querySelector('div.new-message-box div.input')
    if (form !== null) {
      validationRes = validation.submit(form)
      if (validationRes.isValid) {
        const message = form.querySelector('input.input_message')
        if (message !== null) {
          inputValue = message.value
        }
        try {
          const data = {
            content: inputValue,
            type: 'message',
          }
          await this._socket.sendMessage(data)
          const inputMessage = form.querySelector('input.input_message')
          if (inputMessage !== null) {
            inputMessage.value = ''
          }
        } catch (err) {
          throw new Error('no answer sendMessage')
        }
      } else {
        throw new Error('form data not valid')
      }
    }
  }

  async addUsersToChat(data: AddUsersToChatData) {
    await this._api.addUsersToChat(data)
  }

  async deleteUsersFromChat(data: AddUsersToChatData) {
    const response: BadRequestData | any = await this._api.deleteUsersFromChat(
      data
    )
    if (response.reason) {
      throw new Error(response.reason)
    }
  }

  async getChatToken() {
    try {
      const currentChatData = store.getState().currentChat
      if (currentChatData) {
        const data: number = currentChatData.id
        const dataFrowWs: Token | undefined = await this._api.getChatToken(data)
        if (dataFrowWs) {
          store.set('token', dataFrowWs.token)
          const dataReady = {
            userId: store.getState().currentUser?.id,
            chatId: store.getState().currentChat?.id,
            token: store.getState().token,
          }
          this._socket = new Socket(dataReady)
        }
      }
    } catch (err) {
      throw new Error('no answer getChatToken')
    }
  }

  async deleteChat(data: AddUsersToChatData) {
    const response: BadRequestData | any = await this._api.deleteChat(data)
    if (response.reason) {
      throw new Error(response.reason)
    }
    this.getChats()
  }

  async getChats() {
    try {
      const chats = await this._api.getChats()
      store.set('chats', chats)
    } catch (err) {
      throw new Error('no answer getChats')
    }
  }
}
const chatController = new ChatController()
export default chatController
