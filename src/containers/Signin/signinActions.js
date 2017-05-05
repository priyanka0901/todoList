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
            localStorage.setItem('tokenkey',signinToken);
            var signinTokenStorage = localStorage.getItem('tokenkey');
            window.location = '/home';
        })
        .catch(function (error) {
            console.log('wrong inputs');
          })
    }
}

export function requireAuth (nextState, replaceState) {
    const token = localStorage.getItem('tokenkey')
    if (!token) {
        replaceState('/Signin');
    }
}












