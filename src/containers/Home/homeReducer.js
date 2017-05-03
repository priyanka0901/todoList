export default function homeReducer (state = {
    phone_number:[],
    message: [],
    id: [],
    scheduled_datetime:[],
    fetching:false,
    error:null,
}, action ){
   switch(action.type){
        case "FETCH_REMINDER": {
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
                phone_number:action.payload,
                message:action.payload,
                id:action.payload,
                scheduled_datetime:action.payload
            }
        }
        default:
            return state;
   }
}
