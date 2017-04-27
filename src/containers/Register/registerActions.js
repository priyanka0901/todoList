import axios from 'axios';

//actions creators
export function fetchRegisterToken(username, password, confirm_password) {
    console.log(username + password + confirm_password);
    return  {
        type: "FETCH_USERINFO",
        payload: axios({
            method: "post",
            url: "http://frontend-challenge-2.herokuapp.com/register/",
            data: {
                username: username,
                password: password,
                confirm_password: confirm_password
            }
        })
        .then(function (response) {
            var registerToken = response.data.key;
            console.log(registerToken);
            localStorage.setItem('tokenkey',JSON.stringify(registerToken));
            var registerTokenStorage = localStorage.getItem('tokenkey');
            console.log(registerTokenStorage);
        })
        .catch(function (error) {
            console.log('wrong inputs');
          })
    }
}