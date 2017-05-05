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
    return{
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