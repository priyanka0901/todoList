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
            alert('you cannot select previous date and time ');
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
            alert('you cannot select previous date and time ');
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "EDIT_REMINDER_FULFILLED": {
            const reminder = action.payload.data;
            const reminders = state.reminders.slice();
            const reminders1 = [];
            reminders.forEach(function(data) {
                if(data.id === reminder.id) {
                    data.message = reminder.message
                    data.phone_number = reminder.phone_number
                    data.scheduled_datetime = reminder.scheduled_datetime           
                    reminders1.push(data);
                } else {
                    reminders1.push(data);
                }     
            });
           
            return {
                ...state,
                fetching:false,
                reminders:reminders1
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
        case "REMOVE_PAST_REMINDER_PENDING": {
            return {
                ...state,
                fetching:true
            }
        }
        case "REMOVE_PAST_REMINDER_REJECTED": {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "REMOVE_PAST_REMINDER_FULFILLED": {
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
   







