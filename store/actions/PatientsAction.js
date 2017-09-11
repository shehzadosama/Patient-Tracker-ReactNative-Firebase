// Update in Counter 8 -- Separate action file as class
export default class PatientsAction {

    // static properties to be used in reducer for switch cases
    static ADD = "ADD_PATIENTS";
       static SET= "SET_PATIENTS";
     static REMOVE = "REMOVE__PATIENT";
    //  static REMOVE_ALL = "REMOVE_ITEMS";
   

    // static functions to be mapped with dispatch in component
    

    static addPatients(value){
        return { 
            type: 'ADD_PATIENTS',
            val: value
        }
    }

    static setPatients(value){
        return { 
            type: 'SET_PATIENTS',
            val: value
        }
    } 
     static removePatient(key){
        return { 
            type: 'REMOVE__PATIENT',
           keys: key
        }
    }   
}