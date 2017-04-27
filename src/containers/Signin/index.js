import { injectReducer } from '../../store/reducers';

// Sync route definition
export default (store) => ({
    path : 'Signin',

    getComponent (nextState, cb) {
        require.ensure([], (require) => {

            const Signin= require('./SigninContainer').default
            const reducer = require('./signinReducer').default

            injectReducer(store, {key: 'signinReducer', reducer})
            cb(null, Signin)

        },'signinReducer')
    }
}) 