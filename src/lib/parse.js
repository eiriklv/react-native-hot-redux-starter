'use strict'

import Parse from 'parse/react-native'
import SECRETS from '../secrets'

Parse.initialize(SECRETS.Parse.application_id, SECRETS.Parse.javascript_key)

console.log(Parse)

export default Parse
