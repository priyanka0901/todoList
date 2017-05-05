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
            console.log('Reducer...', action.payload)
            console.dir(action)
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
            console.log(reminders);
            return {
                ...state,
                fetching:false,
                reminders: reminders
            }
        }
        default:
            return state;
   }
}
   







