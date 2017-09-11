import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import PatientsDetails_Component from '../components/PatientsDetails_Component';
// import PatientsAction from './../store/actions/PatientsAction';
import GetPatientsMiddleware from '../store/middlewares/GetPatientsMiddleware';
import RemovePatientsMiddleware from '../store/middlewares/RemovePatientsMiddleware';

function mapStateToProps(state) {
    console.log(state.addPatients.patients);
    return {
        list: state.addPatients.patients
        // decCounter: state.decrementCounter.decrementState
    };
}

function mapDispatchToProps(dispatch) {
    return {
       get: function () {

            return dispatch(GetPatientsMiddleware.asyncIncrement());
        },
        remove: function (key) {

            return dispatch(RemovePatientsMiddleware.asyncIncrement(key));
        },
       
    };
}


class PatientsDetails_Container extends Component {
 getPatients() {
        this.props.get();
    }
    removePatient(key) {
        this.props.remove(key);
    }
    render() {
        return <PatientsDetails_Component patientList={this.props.list} getList={this.getPatients.bind(this)} removePatient={this.removePatient.bind(this)} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PatientsDetails_Container);


