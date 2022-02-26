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

//Reducer

function useReducer(prevState, action){
  switch(action.type){
    case: LOGIN:
    return {
      ...prevState,
      user: action.payload,
      logged: true
    }
    case: LOGOUT:
    return {
      ...prevState,
      user: '',
      logged: false
    }
    default: prevState
  }
}

