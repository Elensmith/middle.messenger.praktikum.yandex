import store, { StoreEvents, StateData } from './Store'
import Block from '../mainDOM/Block'
import isEqual from '../functions/isEqual'

export const withStore =
  (mapStateToProps: (state: StateData) => Record<string, unknown>) =>
  (Component: typeof Block) => {
    let state
    return class extends Component {
      constructor(props) {
        state = mapStateToProps(store.getState())
        super({ ...props, ...state })
        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState())

          if (!isEqual(state, newState)) {
            console.log('!isEqual')
            this.setProps({
              ...newState,
            })
          }
        })
      }
    }
  }
