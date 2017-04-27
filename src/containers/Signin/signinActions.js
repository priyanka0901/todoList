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
            var signinToken = response.data.key;
            localStorage.setItem('tokenkey',JSON.stringify(signinToken));
            var signinTokenStorage = localStorage.getItem('tokenkey');
        })
        .catch(function (error) {
            console.log('wrong inputs');
          })
    }
}

