import store from '../utils/store/Store'
import { compare } from '../utils/functions/compare'

interface SocketData {
  token: string
  chatId?: number
  userId?: number
}

export default class Socket {
  socketAdress: string

  socket: WebSocket

  constructor(props: SocketData) {
    this.socketAdress = `wss://ya-praktikum.tech/ws/chats/${props.userId}/${props.chatId}/${props.token}`
    this.socket = new WebSocket(this.socketAdress)

    this.setListeners.bind(this)
    this.setListeners()
  }

  sendMessage(data) {
    this.socket.send(JSON.stringify(data))
  }

  setListeners() {
    this.socket.addEventListener('open', () => {
      console.log('Соединение установлено')

      this.socket.send(
        JSON.stringify({
          content: '0',
          type: 'get old',
        })
      )
    })

    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто')
      } else {
        console.log('Обрыв соединения')
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`)
    })

    this.socket.addEventListener('message', (event) => {
      const messages = JSON.parse(event.data)
      console.log('Получены данные', messages)
      let oldMessages = store.getState().messages
      if (oldMessages && messages.length > 0) {
        if (messages.length > 0) {
          messages.forEach((message) => {
            const isLoad = oldMessages?.some(
              (oldMessage) => oldMessage.id === message.id
            )
            if (!isLoad) {
              oldMessages?.push(message)
            }
          })
          oldMessages.sort(compare)
        } else if (messages.user_id) {
          oldMessages?.push(messages)
        }
      } else {
        oldMessages = [...oldMessages, messages]
      }
      store.set('messages', oldMessages)
    })

    this.socket.addEventListener('error', (event) => {
      console.log('Ошибка', event.messages)
    })
  }
}
