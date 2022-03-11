import { generateStore, EventActions } from '@drizzle/store'
import { todosReducer, appRootSaga} from './root'
import MyStringStore from "../contracts/MyStringStore.json";

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [MyStringStore],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};

// app Reducers and Sagas
const appReducers = { todos: todosReducer }
const appSagas = [appRootSaga]

const contractEventNotifier = store => next => action => {
    if (action.type === EventActions.EVENT_FIRED) {
      const contract = action.name
      const contractEvent = action.event.event
      const contractMessage = action.event.returnValues._message
      const display = `${contract}(${contractEvent}): ${contractMessage}`
  
      // interact with your service
      console.log('Contract event fired', display)
    }
    return next(action)
  }

const appMiddlewares = [ contractEventNotifier ]

// create the store
export default generateStore({
  drizzleOptions: options,
  appMiddlewares,
  appReducers,
  appSagas,
  disableReduxDevTools: false  // enable ReduxDevTools!
})