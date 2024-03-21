import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './src/Main'
import { Provider } from 'react-redux'
import { mystore } from './src/Screen/NewRedux/MyStore'
const App = () => {
  return (
    <Provider store={mystore}>
    <Main/>
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})