import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import AddPatients_Component from '../components/AddPatients_Component';
// import PatientsAction from './../store/actions/PatientsAction';
import PatientsMiddleware from '../store/middlewares/PatientsMiddleware';

function mapStateToProps(state) {
    // console.log(state.addItems.todos)
    return {
        // list: state.addPatients.patientsList
        // decCounter: state.decrementCounter.decrementState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        add: function (value) {

            return dispatch(PatientsMiddleware.asyncIncrement(value));
        },
       
    };
}


class AddPatients_Container extends Component {
 addPatients(item) {
        this.props.add(item);
    }
    render() {
        return <AddPatients_Component add={this.addPatients.bind(this)} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPatients_Container);


