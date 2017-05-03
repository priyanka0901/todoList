import { injectReducer } from '../../store/reducers';
import { requireAuth } from '../Signin/signinActions';
import { homeReducer } from './homeReducer';

 // Sync route definition
 export default (store) => ({
     path : 'Home',
     onEnter: requireAuth,
     getComponent (nextState, cb) {
         require.ensure([], (require) => {

             const Register = require('./HomeContainer').default
             const reducer = require('./homeReducer').default

             injectReducer(store, {key: 'homeReducer', reducer})
             cb(null, Register)

         },'homeReducer')
     }
 })   