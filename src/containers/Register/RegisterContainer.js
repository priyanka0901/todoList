import {connect} from 'react-redux';
import Register from '../../components/Register';
import {fetchRegisterToken} from './registerActions';


const mapStateToProps = (state) =>{
    return state;
}

const mapDispatchToProps=  {
    fetchRegisterToken:fetchRegisterToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Register) 
   