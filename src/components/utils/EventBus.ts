type Handler = (...args: unknown[]) => void

export default class EventBus {
  private listeners: Record<string, Handler[]> = {}

  constructor() {
    this.listeners = {}
  }

  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  off(event: string, callback: Function) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`)
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    )
  }

  emit(event: string, ...args: any) {
    // console.log('emit')
    // if (!this.listeners[event]) {
    //   throw new Error(`Нет события: ${event}`)
    // }

    this.listeners[event].forEach((listener) => {
      listener(...args)
    })
  }
}
