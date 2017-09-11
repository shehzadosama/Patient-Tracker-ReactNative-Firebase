import PatientsAction from "./../actions/PatientsAction";
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';


export default class GetPatientsMiddleware {

    static asyncIncrement() {
        var obj = [];
        var a;
        // console.log("test ", data);
        return (dispatch) => {
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
