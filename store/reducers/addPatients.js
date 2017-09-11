// import ItemsAction from '../actions/Items'
import PatientsAction from "../actions/PatientsAction";
import {AsyncStorage} from 'react-native'

const INITIAL_STATE = {
  patients: []
}


function addPatients(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PatientsAction.ADD:

      return Object.assign({}, state, {
       patients: state.patients.concat({
          values: action.val,
        })
      });
      case PatientsAction.SET:

      // return Object.assign({}, state, {
      //  patients: state.patients.concat({
      //     values: action.val,
      //   })
      // });
         return Object.assign({}, state, {
       patients:action.val,
        
      });
    
    default:
      return state;
  }
}

export default addPatients;