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
            editMessage: '',
            editNumber:'',
            editDates:'',
            removeId: '',
        }
        this.pastArray = [];
        this.presentArray = [];
    }

    componentWillMount = () => {
        this.props.fetchListReminder(token); 
    }
    
    handleReminders = () => {
        const { reminders } = this.props;
        reminders.forEach(function (data) {
            var userTime = data.scheduled_datetime;
            var now  = moment().format();
            if(userTime < now ) {
                this.pastArray.push(data);
            }
            else{
                this.presentArray.push(data);
            }
        },this);

    }

    handlePastReminder = (pastArray) => {
        return(
            pastArray.map(function (reminder, index) {
                return(
                    <div key={index}>
                        <p className="past-message">{reminder.message}</p>
                        <p className="past-date">{moment(reminder.scheduled_datetime ).format("MMMM D, HH:mmA")}</p>
                        <button className="delete-button" value={reminder.id} onClick={this.handlePastDelete}>DELETE</button>
                        <button className="remind-button" value={reminder.id} onClick={this.handleRemindAgain}> Remind again </button>  
                    </div>
                );
            }, this)
        );
    }

    handleLogOut = () => {
        localStorage.removeItem('tokenkey');
        window.location = '/Signin';   
    }

    handlePastDelete = (e) => {
        var removeIds = e.target.value;
        var removeItem = parseInt(removeIds);
        this.props.RemovePastReminder(removeItem);
    }

    handleRemindAgain = () =>{
        <input type= "text" className="reminder-add" placeholder="Add reminder messagedsscsd" onChange={this.handleAddReminder} />
       
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

    handleRemoveAction = (e) => {
        var removeIds = e.target.value;
        var removeItem = parseInt(removeIds);
        this.props.RemoveReminder(removeItem);
    }

    editReminderMessage = (e) => {
        var editMessage = e.target.value
        this.setState({editMessage: editMessage});
    }

    editNumber = (e) => {
        var editNumber = e.target.value
        this.setState({editNumber:editNumber});
    }

    editAddDate = (value) => {
       var editDate = value;
        var editDates = moment(editDate).format("YYYY-MM-DDTH:m:00Z");
        this.setState({editDates:editDates});
    }

    EditReminderAction = () => {
        this.props.SendEditReminder(this.state.editMessage, this.state.editNumber, this.state.editDates, this.state.idEvent);
        this.setState({editable: true});        
    }

    cancelValue = () => {
        const { reminders } = this.props;
        this.setState({editable:true});
    }

    editvalue = (e) => {
        this.setState({editable:false});
        var idEvents = e.target.value;
        var idEvent = parseInt(idEvents);
        this.setState({idEvent:idEvent});
    }

    editButtonAction = (presentArray) => {
        const editor = this.state.editable;
        const idEventValue = this.state.idEvent;
        if(!editor) {
            return(
                presentArray.map(function (reminder, index) {
                    if(idEventValue === reminder.id) {
                        return(
                            <div key={index}>
                                <input type="text" className="reminder-add" placeholder="edit message" value={this.state.editMessage} onChange={this.editReminderMessage}/>
                                <input type="number" className="reminder-number" placeholder="edit number" value={this.state.editNumber} onChange={this.editNumber} />
                                <div className="reminder-date">
                                    <Datetime placeholder="Date & Time" onChange={this.editAddDate}/>
                                </div>
                                <button className="save-button" onClick={this.EditReminderAction}>SAVE</button>
                                <button className="cancel-button" onClick={this.cancelValue}>CANCEL</button>
                            </div>
                        );
                    } else {
                        return(
                            <div key={index}>
                                <span className="reminder-message"> {reminder.message} at </span>
                                <span className="reminder-datetime">{moment(reminder.scheduled_datetime ).format("MMMM D, HH:mmA")}</span>
                                <button className="remove-button" value={reminder.id} onClick={this.handleRemoveAction}>REMOVE </button>
                                <button className="edit-button" value={reminder.id}>EDIT </button>
                            </div>
                        );
                    }
                },this)
            );
        }
        else {
            return(
            presentArray.map(function (reminder, index) {
                return(
                    <div key={index}>
                        <span className="reminder-message"> {reminder.message} at </span>
                        <span className="reminder-datetime">{moment(reminder.scheduled_datetime ).format("MMMM D, HH:mmA")}</span>
                        <button className="remove-button" value={reminder.id} onClick={this.handleRemoveAction}>REMOVE </button>
                        <button className="edit-button" onClick={this.editvalue} value={reminder.id}>EDIT </button>
                    </div>
                );
            },this) 
        );
    }
}



render() {
        return (
            <div className="home-page">
            {this.handleReminders()}
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
                    {this.editButtonAction(this.presentArray)}
                </div>

                <div className = "past-reminders">
                    <h4>Past Reminder </h4>
                    {this.handlePastReminder(this.pastArray)}
                   
                </div>
            </div>
        );
    }
}

export default Home;