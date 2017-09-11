import PatientsAction from "./../actions/PatientsAction";
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';


export default class RemovePatientsMiddleware {

    static asyncIncrement(key) {
        // console.log("test ", data);
        return (dispatch) => {
            // My Business logic Here
            // var patients = [];


            firebase.database().ref('patients/' + key).remove();
            // var storageData;
            // // AsyncStorage.removeItem('patients');
            // AsyncStorage.getItem('patients').then((value) => {
            //     storageData = JSON.parse(value);
            //     storageData.splice(key,1);
            //     console.log(storageData);
            //     // if (storageData === null) {
            //         // alert('no data in storage');
            //         AsyncStorage.setItem('patients', JSON.stringify(storageData)).then(
            //             dispatch(PatientsAction.setPatients(storageData))
            //         // dispatch(PatientsAction.setPatients([]))


                    // );
                

            // })
            firebase.database().ref("/patients/").once("value").then(function (snapshot) {
                obj = snapshot.val();
                // var arr = [];
                // for (let a in obj) arr.push(obj[a])

                console.log('obj', obj);
                dispatch(PatientsAction.setPatients(obj));
            }
            );
           



        }
    }
}
