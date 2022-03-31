import store from '../utils/store/Store'
import { compare } from '../utils/functions/compare'

interface SocketData {
  token: string
  chatId: number
  userId: number
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
      // this.socket.send(
      //   JSON.stringify({
      //     content: 'Моё второе сообщение миру!',
      //     type: 'message',
      //   })
      // )
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
      const message = JSON.parse(event.data)
      console.log('Получены данные', message)
      let oldMessages = store.getState().messages
      if (oldMessages !== undefined) {
        if (message.length > 0) {
          message.forEach((el) => {
            const isLoad = oldMessages?.some((m) => m.id === el.id)
            if (!isLoad) {
              oldMessages?.push(el)
            }
          })
          oldMessages.sort(compare)
        } else if (message.user_id) {
          oldMessages?.push(message)
        }
      } else {
        oldMessages = [...message.sort(compare)]
      }
      store.set('messages', oldMessages)
      console.log(store.getState().messages, 'store.getState().messages')
    })

    this.socket.addEventListener('error', (event) => {
      console.log('Ошибка', event.message)
    })
  }
}
