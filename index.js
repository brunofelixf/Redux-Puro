//Importa o redux
const redux = require('redux')
const createStore = redux.createStore

//Actions Type

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

//Actions

function login(user) {
  return {
    type: 'LOGIN',
    payload: user
  }
}

function logout() {
  return {
    type: 'LOGOUT'
  }
}

const initialState = {
  user: '',
  logged: false
}

//Reducer

function useReducer(prevState = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...prevState,
        user: action.payload,
        logged: true
      }
    case LOGOUT:
      return {
        ...prevState,
        user: '',
        logged: false
      }
    default:
      return prevState
  }
}

//Store

//Cria a store
const store = createStore(useReducer)
//exibe o estado inicial
console.log('Estado Inicial: ', store.getState())
//executa a ação de login
store.dispatch(login('Bruno'))
console.log('Após o Login: ', store.getState())
//executa a ação de logout
store.dispatch(logout())
console.log('Após o Logout: ', store.getState())
