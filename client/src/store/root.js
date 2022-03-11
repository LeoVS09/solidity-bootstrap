import { put, takeEvery } from 'redux-saga/effects'

// actions
const TODOS_FETCH = 'MY_APP/TODOS_FETCH'
const TODOS_RECEIVED = 'MY_APP/TODOS_RECEIVED'

// reducers
export const todosReducer = (state = [], action) => {
  if (action.type === TODOS_RECEIVED) {
    // update your state
    return action.todos
  }
  return state
}

// fetch data from service using sagas
async function fetchTodos() {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos')

  await put({ type: TODOS_RECEIVED, todos: await todos.json() })
}

// Combine all your redux concerns

// app root saga
export async function appRootSaga() {
  await takeEvery(TODOS_FETCH, fetchTodos)
}