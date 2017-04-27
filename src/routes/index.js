// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout';
import Signin from '../containers/Signin'; //mention the index route
import Register from '../containers/Register'



export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  childRoutes : [
      Signin(store),
      Register(store),
   ]
})


export default createRoutes
