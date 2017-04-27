import {connect} from 'react-redux';
import Signin from '../../components/Signin';
import {fetchSigninToken} from './signinActions'

const mapStateToProps = (state) =>{
    return state;
}

const mapDispatchToProps= () => ({
    fetchSigninToken:fetchSigninToken
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
