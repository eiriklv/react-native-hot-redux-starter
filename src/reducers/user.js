'use strict'

import { combineReducers } from 'redux'
import { GET_USER, LOGIN, LOGOUT } from '../actions/user'

export function user(state=null, action) {
  switch (action.type) {
  case GET_USER:
  case LOGIN:
    return action.user
  case LOGOUT:
    return null
  default:
    return state
  }
}

