import axios from 'axios';

const token = localStorage.getItem('tokenkey');

export function fetchListReminder(token) {
    return {
        type: "FETCH_REMINDER",
        payload: axios({
            headers: { 
                'Authorization': `Token ${token}`
            },
            method: "get",
            url: "https://frontend-challenge-2.herokuapp.com/reminders/"
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log('errorr in inputs');
        })
    }
}