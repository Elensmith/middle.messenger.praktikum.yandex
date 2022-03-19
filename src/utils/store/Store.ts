import EventBus from '../EventBus'
import set from '../functions/set'
import { User } from './interfaces/userInterface'

export enum StoreEvents {
  Updated = 'updated',
}

export interface StateData {
  currentUser?: User
}

// наследуем Store от EventBus, чтобы его методы были сразу доступны у экземпляра Store
class Store extends EventBus {
  private state: StateData = {}

  public getState() {
    return this.state
  }

  public set(path: keyof StateData, value: unknown) {
    set(this.state, path, value)
    // метод EventBus
    this.emit(StoreEvents.Updated)
  }
}
const store = new Store()

// export const withStore = (mapStateToProps: (state: StateData) => Record<strring, unknown>) {
//   let state
//   return class extends
// }

export default store
