import EventBus from '../mainDOM/EventBus'
import set from '../functions/set'
import {
  User,
  Chats,
  ChatToken,
  ChatMessage,
  ErrorMessage,
} from './interfases/storeInterface'

export enum StoreEvents {
  Updated = 'updated',
}

export interface StateData {
  currentUser?: User
  chats?: Chats
  currentChat?: Chats
  userId?: User
  token?: ChatToken
  messages?: ChatMessage[]
  errorMessage?: ErrorMessage
}

class Store extends EventBus {
  private state: StateData = {}

  public getState() {
    return this.state
  }

  public set(path: keyof StateData, value: unknown) {
    set(this.state, path, value)
    this.emit(StoreEvents.Updated)
  }
}
const store = new Store()

export default store
