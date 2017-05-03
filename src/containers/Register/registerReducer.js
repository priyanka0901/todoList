 export default function registerReducer (state= {
     token:[],
     fetching:false,
     error:null,
 }, action) {
     switch(action.type){
         case "FETCH_USERINFO": {
             return {
                 ...state,
                 fetching:true
             }
         }
         case "FETCH_USERINFO_REJECTED": {
             return { 
                 ...state,
                 fetching:false,
                 error:action.payload
             }
         }
         case "FETCH_USERINFO_FULFILLED": {
             return {
                 ...state,
                 fetching:false,
                 token:action.payload
             }
         }
         default:
         return state;
     }
 }

