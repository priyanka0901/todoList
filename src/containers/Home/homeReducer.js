const initialState = {
    reminders:[], 
    error:null, 
}


export default function homeReducer (state = initialState , action ){
   switch(action.type){
        case "FETCH_REMINDER_PENDING": {
            return {
                ...state,
                fetching:true
            }
        }
        case "FETCH_REMINDER_REJECTED": {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "FETCH_REMINDER_FULFILLED": {
            console.log(action.payload.data);
            return {
                ...state,
                fetching:false,
                reminders:action.payload.data
            }
        }
        case "SEND_REMINDER_PENDING": {
            return {
                ...state,
                fetching:true
            }
        }
        case "SEND_REMINDER_REJECTED": {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "SEND_REMINDER_FULFILLED": {
            const reminder = action.payload.data
            const reminders = state.reminders.slice()
            reminders.push(reminder);
            return {
                ...state,
                fetching:false,
                reminders: reminders
            }
        }
        case "EDIT_REMINDER_PENDING": {
            return {
                ...state,
                fetching:true
            }
        }
        case "EDIT_REMINDER_REJECTED": {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "EDIT_REMINDER_FULFILLED": {
            console.log(action.payload.data);
            const reminder = action.payload.data.id;
           
            return {
                ...state,
                fetching:false,
                reminders:reminder
            }
        }
        case "REMOVE_REMINDER_PENDING": {
            return {
                ...state,
                fetching:true
            }
        }
        case "REMOVE_REMINDER_REJECTED": {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "REMOVE_REMINDER_FULFILLED": {
           const idInfo =  action.payload.config.data;
           const parseId = JSON.parse(idInfo);
            const reminders = state.reminders.slice();
            const reminders1 = state.reminders.filter(function(data) {
                return data.id !== parseId.id; 
            });
            return {
                ...state,
                fetching:false,
                reminders:reminders1
            }
        }
        default:
            return state;
   }
}
   







