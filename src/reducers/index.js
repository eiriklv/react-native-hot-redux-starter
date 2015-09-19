'use strict'

import { combineReducers } from 'redux'
import * as userReducer from './user'
import * as exampleReducer from './example'

const appReducers = combineReducers({
  ...userReducer,
  ...exampleReducer
})

export default appReducers

