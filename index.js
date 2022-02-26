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
