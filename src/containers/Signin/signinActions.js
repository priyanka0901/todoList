import axios from 'axios';

//actions creators
export function fetchSigninToken(username, password) {
    return  {
        type: "FETCH_USERINFO",
        payload: axios({
            method: "post",
            url: "https://frontend-challenge-2.herokuapp.com/rest-auth/login/",
            data: {
                username: username,
                password: password
            }
        })
        .then(function (response) {
            var token;
            token = response.data.key;
            console.log(token);
            // var tokenLocalStorage = JSON.parse(localStorage.getItem('token'));
            // localStorage.setItem('token', JSON.stringify(tokenLocalStorage));
            // console.log(tokenLocalStorage);
            var tokenLocalStorage = localStorage.setItem('token', JSON.stringify(tokenLocalStorage));
            console.log(tokenLocalStorage);
        })
    }
}

