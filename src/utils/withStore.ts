import store, { StoreEvents, StateData } from './store/Store'
import Block from './Block'
import isEqual from './functions/isEqual'

export const withStore =
  (mapStateToProps: (state: StateData) => Record<string, unknown>) =>
  (Component: typeof Block) => {
    let state: unknown
    return class extends Component {
      constructor(props: unknown) {
        state = mapStateToProps(store.getState())

        super({ ...props, ...state })
        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState())
          if (!isEqual(state, newState))
            this.setProps({
              ...newState,
            })
        })
      }
    }
  }
