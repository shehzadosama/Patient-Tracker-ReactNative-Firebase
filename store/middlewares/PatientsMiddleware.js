import PatientsAction from "./../actions/PatientsAction";
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';

export default class PatientsMiddleware {
   
    static asyncIncrement(data) {
        var database = firebase.database().ref("/");

        console.log("test ", data);
        return (dispatch) => {
            var storageData;

            database.child("patients").push(data);
           alert("Data entered successfully");
            // dispatch(PatientsAction.addPatients(data));
       

        }
    }
}
