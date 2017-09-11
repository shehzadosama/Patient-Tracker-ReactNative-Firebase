import React, { Component } from 'react';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon, View, List, ListItem } from 'native-base';
import DatePicker from 'react-native-datepicker';
export default class PatientsDetails_Container extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
     input: "",
     date: "",
    };
    
  }
  componentDidMount() {
    // var list = this.props.patientList;
    // console.log(list);
    this.props.getList();


    // list = this.props.patientList;
    // console.log(list);

  }
  
  searchByName = (key) => { 
// console.log(this.state.date);
// console.log("All objects",data)
    var list = this.props.patientList;
    // return true 
    
    return ((list[key].name.search(this.state.input) >= 0)   && (list[key].date.search(this.state.date) >= 0) ) ? true : false
}

  remove(key) {
    this.props.removePatient(key);
    // alert("Patient deleted");
  }
  cancel(){
    this.setState({date : ''})
  }
  

  render() {
    var list = this.props.patientList;
    console.log(list);
    // this.props.getList();


    // list = this.props.patientList;
    // console.log(list);
    if (list !== null) {
    var listItems = Object.keys(list).filter(this.searchByName).map((key) => {
      //  onClick={() => this.filterMyPosts()}
      // var btn = <button onClick={this.remove.bind(this,key)} >REMOVE{key}</button>;
     
      return (
        // <ListItem >
        <ListItem index={key}>
          
          <Text>Patient name: {list[key].name}{"\n"}
            Disease: {list[key].disease}{"\n"}
            Medication: {list[key].medication}{"\n"}
            Cost:  {list[key].cost}{"\n"}
            Date:   {list[key].date}</Text>
          <Button iconButton light onPress={this.remove.bind(this, key)} >
            <Text>Remove</Text>
            <Icon name='trash' />
          </Button>


        </ListItem >

        // </li>
      )
    })
  }
  else {
    return (
      <ListItem >

<Text>  No patients available</Text>
        </ListItem >
    )
  }



    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChange={ev => this.setState({ input: ev.nativeEvent.text })}/>

            {this.state.date ? <Icon name="arrow-back" onPress={this.cancel.bind(this)} /> : <Icon name="ios-people"  /> } 
            <DatePicker
              style={{ width: 30 }}

              mode="date"
            //  date={this.state.date}
             // placeholder="Date of arrival"
              // format="YYYY-MM-DD"
              format="M/DD/YYYY"
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
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
          </Header>
          <Content>
            <List>
              {listItems}
            </List>
          </Content>
      </Container>
        );
  }
}