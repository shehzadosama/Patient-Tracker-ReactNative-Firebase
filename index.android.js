/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyD2cNEpJXeN6qbAuCvWVuoAqIbQCmKcTh8",
  authDomain: "patient-tracker-d5255.firebaseapp.com",
  databaseURL: "https://patient-tracker-d5255.firebaseio.com",
  projectId: "patient-tracker-d5255",
  storageBucket: "patient-tracker-d5255.appspot.com",
  messagingSenderId: "662159254879"
};
firebase.initializeApp(config);
export default class PatientTracker_Firebase extends Component {
  render() {
    return (
      <Provider store={store}>

        <App />

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
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
});

AppRegistry.registerComponent('PatientTracker_Firebase', () => PatientTracker_Firebase);
