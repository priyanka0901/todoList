import React from 'react';
import './home.scss';
import './calendar.scss';
import moment from 'moment';
import Datetime from 'react-datetime';

const token = localStorage.getItem('tokenkey');

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            addReminder: '',
            addNumber:'',
            userDate:''
        }
    }

    componentWillMount = () => {
        this.props.fetchListReminder(token);  
        // <input  className="reminder-date" placeholder="Date & Time" value={this.state.addDate} onChange={this.handleAddDate} />
    }

    handleDateTime = () => {
        var date = new Date();
        console.log(date);
    }

    handleLogOut = () => {
        localStorage.removeItem('tokenkey');
        window.location = '/Signin';   
    }

    handleAddReminder = (e) => {
        var addReminder = e.target.value;
        this.setState({addReminder: addReminder});
    }

    handleAddNumber = (e) => {
        var addNumber = e.target.value;
        this.setState({addNumber:addNumber});
    }

    handleAddDate = (value) => {
        var addDate = value;
        var addDates= moment(addDate).format("YYYY-MM-DDTH:m:00Z");
        this.setState({userDate:addDates});
    }

    SendNewReminder = () => {
        this.props.sendAddReminder(this.state.addReminder,this.state.addNumber, this.state.userDate);
    }
   
    render() {
        return (

            <div className="home-page">
                <header>
                    <p onClick={this.handleLogOut}>Logout</p>
                </header>
                <div className="add-reminder">
                    <h4>Add Reminder </h4>
                    <input type= "text" className="reminder-add" placeholder="Add reminder message" value={this.state.addReminder} onChange={this.handleAddReminder} />
                    <input type="number" className="reminder-number" placeholder="Phone number" value={this.state.addNumber} onChange={this.handleAddNumber} />
                    <div className="reminder-date">
                        <Datetime placeholder="Date & Time" onChange={this.handleAddDate}/>
                    </div>
                    <button type="button" className="add-button" onClick={this.SendNewReminder}>Add </button>
                </div>
                <div className="upcoming-reminder">
                    <h4>Upcoming Reminder</h4>
                </div>
            </div>
        );
    }
}
 
export default Home; 