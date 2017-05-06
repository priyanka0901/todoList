import React from 'react';
import PropTypes from 'prop-types'
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
            userDate:'',
            editable: true,
            idEvent:'',
        }
    }

    componentWillMount = () => {
        this.props.fetchListReminder(token);  
    }

    handleDateTime = () => {
        var date = new Date();
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

    editReminderMessage = () => {

    }

    editNumber = () => {

    }

    editAddDate = () => {

    }

    cancelValue = () => {
        const { reminders } = this.props;
        this.setState({editable:true});
    }

    saveButtonAction = () => {
        this.props.saveReminder(this)
    }

    editvalue = (e) => {
        const { reminders } = this.props;
        this.setState({editable:false});
        var idEvents = e.target.value;
        var idEvent = parseInt(idEvents);
        this.setState({idEvent:idEvent});
    }

    editButtonAction = () => {
        const { reminders } = this.props;
        const editor = this.state.editable;
        const idEventValue = this.state.idEvent;
        if(!editor) {
            return(
                reminders.map(function (reminder, index) {
                    if(idEventValue === reminder.id) {
                        return(
                            <div key={index}>
                                <input type="text" className="reminder-add" value={reminder.message} />
                                <input type="number" className="reminder-number" value={reminder.phone_number}  />
                                <div className="reminder-date">
                                    <Datetime placeholder="Date & Time" value={moment(reminder.scheduled_datetime ).format("MM/DD/YYYY HH:mmA")}/>
                                </div>
                                <button className="save-button" onClick={this.saveButtonAction}>SAVE</button>
                                <button className="cancel-button" onClick={this.cancelValue}>CANCEL</button>
                            </div>
                        );
                    } else {
                        return(
                            <div key={index}>
                                <span className="reminder-message"> {reminder.message} at </span>
                                <span className="reminder-datetime">{moment(reminder.scheduled_datetime ).format("MMMM D, HH:mmA")}</span>
                                <button className="remove-button">REMOVE </button>
                                <button className="edit-button" value={reminder.id}>EDIT </button>
                            </div>
                        );
                    }
                },this)
            );
        }
        else {
            return(
            reminders.map(function (reminder, index) {
                return(
                    <div key={index}>
                        <span className="reminder-message"> {reminder.message} at </span>
                        <span className="reminder-datetime">{moment(reminder.scheduled_datetime ).format("MMMM D, HH:mmA")}</span>
                        <button className="remove-button">REMOVE </button>
                        <button className="edit-button" onClick={this.editvalue} value={reminder.id}>EDIT </button>
                    </div>
                );
            },this) 
        );
    }
}
render() {
    const { reminders } = this.props;
        return (
            <div className="home-page">
                <header>
                    <p>Logout</p>
                </header>
                <div className="add-reminder">
                    <h4>Add Reminder </h4>
                    <input type= "text" className="reminder-add" placeholder="Add reminder message" value={this.state.addReminder} onChange={this.handleAddReminder} />
                    <input type="number" className="reminder-number" placeholder="Phone number" value={this.state.addNumber} onChange={this.handleAddNumber} />
                    <div className="reminder-date">
                        <Datetime placeholder="Date & Time" onChange={this.handleAddDate}/>
                    </div>
                    <button type="button" className="add-button" onClick={this.SendNewReminder}>ADD </button>
                </div>
                <div className="upcoming-reminder">
                    <h4>Upcoming Reminder</h4>  
                    {this.editButtonAction()}
                </div>

                <div className = "past-reminders">
                    <h4>Past Reminder </h4>
                </div>
            </div>
        );
    }
}

 
export default Home; 