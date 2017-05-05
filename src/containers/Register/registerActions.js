import axios from 'axios';

//actions creators
// export function validatePassword(password, confirm_password) {
//     if(password !== confirm_password) {
//         console.log('invalid');
//     }
//}

export function fetchRegisterToken(email, password, confirm_password) {
    return  {
        type: "FETCH_USERINFO",
        payload: axios({
            method: "post",
            url: "https://frontend-challenge-2.herokuapp.com/register/",
            data: {
                email:email,
                password: password,
                confirm_password: confirm_password
            }
        })
        .then(function (response) {
            var registerToken = response.data.token;
            localStorage.setItem('tokenkey',registerToken);
            var registerTokenStorage = localStorage.getItem('tokenkey');
            console.log(registerTokenStorage);
            window.location = '/home';
        })
        .catch(function (error) {
            console.log('wrong inputs');
          })
    } 
}

