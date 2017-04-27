 import { injectReducer } from '../../store/reducers';

 // Sync route definition
 export default (store) => ({
     path : 'Home',

     getComponent (nextState, cb) {
         require.ensure([], (require) => {

             const Register = require('./HomeContainer').default
             const reducer = require('./homeReducer').default

             injectReducer(store, {key: 'homeReducer', reducer})
             cb(null, Register)

         },'homeReducer')
     }
 })  