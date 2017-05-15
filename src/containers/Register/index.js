import { injectReducer } from '../../store/reducers';

// Sync route definition
export default (store) => ({
    path : 'Register',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {

            const Register = require('./RegisterContainer').default
            const reducer = require('./registerReducer').default

            injectReducer(store, {key: 'registerReducer', reducer})
            cb(null, Register)

        },'registerReducer')
    }
})  