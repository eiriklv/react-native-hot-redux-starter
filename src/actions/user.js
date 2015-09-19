'use strict'

import Parse from '../lib/parse'

export const GET_USER = 'GET_USER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

//
// action creators
//

export function getUser(user=null) {
  return {
    type: GET_USER,
    user
  }
}

export function getUserAsync(user) {
  return dispatch => {
    // dispatch optimistic update
    dispatch(getUser(user))

    Parse.User.currentAsync().then( user => {
      if (user) {
        dispatch(getUser(user.toJSON()))
      } else {
        dispatch(getUser())
      }
    }, function(error) {
      console.log("something went wrong:", error)
    })
  }
}

export function login(user=null) {
  return {
    type: LOGIN,
    user
  }
}

export function loginAsync(user, pass) {
  return dispatch => {
    Parse.User.logIn(user, pass).then( user => {
      dispatch(login(user.toJSON()))
    },
      function(error) {
        console.log('log in failed for some reason', error)
      }
    )
  }
}

export function logout(user=null) {
  return {
    type: LOGOUT,
    user
  }
}

export function logoutAsync(user, pass) {
  return dispatch => {
    Parse.User.logOut().then( user => {
      dispatch(logout())
    },
      function(error) {
        console.log('log in failed for some reason', error)
      }
    )
  }
}


