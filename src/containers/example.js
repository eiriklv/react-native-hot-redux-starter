'use strict'

import React from 'react-native'
import { connect, dispatch } from 'react-redux/native'
import { test } from '../actions/example'
import { getUserAsync, loginAsync, logoutAsync } from '../actions/user'
import DumbComponent from '../components/DumbComponent'
import UserComponent from '../components/UserComponent'
import Parse  from '../lib/parse'

let {
  StyleSheet,
  Text,
  View,
} = React

function select(state) {
  return state
  // return { foo: state.foo }
}

@connect(state => {
  return select(state)
})
export default class ExampleApp extends React.Component {
  constructor(props) {
    super(props)
    const { user, dispatch } = props
    dispatch(getUserAsync(user))
  }

  render() {
    const { foo, user, dispatch } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Starter is Running Hot!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <DumbComponent
          foo={foo}
          test={(text='hi') => dispatch(test(text))}
        />
        <UserComponent
          user={user}
          getUser={() => dispatch(getUserAsync(user))}
          login={(user, pass) => dispatch(loginAsync(user, pass))}
          logout={() => dispatch(logoutAsync(user))}
        />
      </View>
    )
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
