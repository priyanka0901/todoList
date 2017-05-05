import {connect} from 'react-redux';
import Home from '../../components/Home';
import {fetchListReminder} from './homeActions';
import {sendAddReminder} from './homeActions';

const mapStateToProps = (state) =>{
    return state;
}

const mapDispatchToProps = {
    fetchListReminder: fetchListReminder,
    sendAddReminder:sendAddReminder
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) 
  