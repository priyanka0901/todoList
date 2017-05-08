import axios from 'axios';

const token = localStorage.getItem('tokenkey');

export const FETCH_REMINDER = "FETCH_REMINDER";
export function fetchListReminder(token) {
    return {
        type: "FETCH_REMINDER",
        payload: axios.get('https://frontend-challenge-2.herokuapp.com/reminders/',
        {
            headers: { 
                'Authorization': `Token ${token}`
            }
        })
    } 
}

export const SEND_REMINDER = "SEND_REMINDER";
export function sendAddReminder(addReminder, addNumber, userDate) {
    return {
        type:"SEND_REMINDER",
        payload:axios({
            method:"post",
            url:"https://frontend-challenge-2.herokuapp.com/reminders/",
            headers: { 
                'Authorization': `Token ${token}`
            },
            data: {
                message: addReminder,
                phone_number: addNumber,
                scheduled_datetime: userDate    
            }
        })
    }
}

export const EDIT_REMINDER ="EDIT_REMINDER";
export function SendEditReminder(editMessage, editNumber, editDates, idEvent) {
        return {
            type: "EDIT_REMINDER",
            payload:axios({
                method:"put",
                url:"https://frontend-challenge-2.herokuapp.com/reminders/" + idEvent + "/",
                headers: {
                    'Authorization': `Token ${token}`
                },
                data: {
                    message: editMessage,
                    phone_number:editNumber,
                    scheduled_datetime:editDates
                }
            })
        }
    }

export const REMOVE_REMINDER = "REMOVE_REMINDER";
export function RemoveReminder(removeItem) {
    return {
        type: "REMOVE_REMINDER",
        payload: axios({
            method:"delete",
            url:"https://frontend-challenge-2.herokuapp.com/reminders/" + removeItem + "/",
            headers: {
                'Authorization': `Token ${token}`
            },
            data:{
                id: removeItem
            }
        })
    }
}


// export function PastReminder(userId) {
//     return {
        
//     }
// }



