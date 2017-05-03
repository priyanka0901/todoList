import React from 'react';
import './home.scss';
const token = localStorage.getItem('tokenkey');

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }
    componentWillMount() {
        this.props.fetchListReminder(token);
    }
    handleLogOut() {
        localStorage.removeItem('tokenkey');
        window.location = '/Signin';   
    }
    render() {
        return (
            <div className="home-page">
                <header>
                    <p onClick={this.handleLogOut}>Logout</p>
                </header>
                <div className="add-reminder">
                    <h4>Add Reminder </h4>
                    <input type= "text" className="reminder-add" placeholder="Add reminder message" />
                    <input type="number" className="reminder-number" placeholder="Phone number"/>
                </div>
            </div>
        );
    }
}
 
export default Home; 