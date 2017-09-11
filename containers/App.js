import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
// import ScarletScreen from '../../components/ScarletScreen';
// import GrayScreen from '../../components/GrayScreen';
import AddPatients_Container from '../containers/AddPatients_Container';
import PatientsDetails_Container from '../containers/PatientsDetails_Container';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, InputGroup, Input, List, Button, Text, View } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';


const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="addPatients_Container"
          component={AddPatients_Container}
          title="addPatients_Container"
          hideNavBar={true}
          initial
        />
        <Scene
          key="patientsDetails_Container"
          component={PatientsDetails_Container}
          title="PatientsDetails_Container"
          hideNavBar={true}
        // initial
        />
      </Scene>
    </Router>
  );
}



export default App;