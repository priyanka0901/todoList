import axios from 'axios';

//actions creators
export function fetchRegisterToken(username, password, confirmPassword) {
    return  {
        type: "FETCH_USERINFO",
        payload: axios({
            method: "post",
            url: "http://frontend-challenge-2.herokuapp.com/register/",
            data: {
                username: username,
                password: password,
                confirmPassword: confirmPassword
            }
        })
    }
}