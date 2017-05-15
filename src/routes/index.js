// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout';
import Signin from '../containers/Signin'; //mention the index route
import Register from '../containers/Register'
import Home from '../containers/Home';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  childRoutes : [
      Signin(store),
      Register(store),
      Home(store)
   ]
})


export default createRoutes
