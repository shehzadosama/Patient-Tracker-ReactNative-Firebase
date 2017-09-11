import React, { Component } from 'react';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';
class AddPatients_Component extends Component {
  constructor(props) {
    super(props);
    // this.state = { payload:{date:"2017/08/15"} }
    // new Date().toString
    // this.state = { payload:{date:new Date().toDateString} }
    this.state = {
      date: new Date().toLocaleDateString(),
      name: '',
      disease: '',
      medication: '',
      cost: ""
    };
    //     this.state = { payload: { date: new Date().toLocaleDateString() } }

    //     this.state = { {name: "" }
    //   }
    //     this.state = { payload: { disease: "" } }
    // this.state = { payload: { medicatione: "" } }
    // this.state = { payload: { cost: "" } }
  }


  addPatients() {
    // event.nativeEvent.text.
    this.props.add({
      name: this.state.name,
      date: this.state.date,
      disease: this.state.disease,
      medication: this.state.medication,
      cost: this.state.cost,
    });
    this.setState({ name: "",
    disease: "",
    medication:"",
    cost:"",
   })
  }






  render() {
    return (
      <Container>
        <Header>
          <Body><Text>Add Patients</Text></Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Patient Name</Label>
              <Input value={this.state.name} onChange={ev => this.setState({ name: ev.nativeEvent.text })} />
            </Item>
            <Item floatingLabel last>
              <Label>Disease</Label>
              <Input value={this.state.disease} onChange={ev => this.setState({ disease: ev.nativeEvent.text })} />
            </Item>
            <Item floatingLabel last>
              <Label>Medication Provided</Label>
              <Input  value={this.state.medication} onChange={ev => this.setState({ medication: ev.nativeEvent.text })} />
            </Item>
            <Item floatingLabel last>
              <Label>Cost</Label>
              <Input value={this.state.cost}  onChange={ev => this.setState({ cost: ev.nativeEvent.text })} />
            </Item>
            <DatePicker
              style={{ width: 200 }}

              mode="date"
              format="M/D/YYYY"
            date={this.state.date}
              placeholder="Date of arrival"
              // format="YYYY-MM-DD"
              
              // minDate="2016-05-01" 
              //maxDate="2016-06-01" 
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              //  onDateChange={ev => this.setState(payload.date= date)} 
              onDateChange={(date) => this.setState({ date: date })}
            />

            <Footer>
              <FooterTab>
                <Button onPress={this.addPatients.bind(this)}>
                  <Icon name="add" />
                </Button>
                 
              </FooterTab>
              
            </Footer>
            <Button rounded success onPress={() => Actions.patientsDetails_Container()}>
                  <Text>VIEW ALL PATIENTS</Text>
                </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}


export default AddPatients_Component;