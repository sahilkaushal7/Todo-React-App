import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import Style from '../App.css';
class Create extends React.Component{
    onCreate = (e) => {
        e.preventDefault();
        let title = document.getElementById('title').value;
        let summary = document.getElementById('summary').value;
        this.props.createTask(title,summary,status);
        this.props.history.push('/todos');
    }
    render(){
        return (
            <div>
            <Navigation></Navigation>
            <center><h1>Create Your Todo Item</h1><hr></hr></center>
            <form onSubmit={this.onCreate} className={Style.Form}>
                <input type="text" id="title" placeholder="Enter the title of todo" className={Style.inputField}/>
                <input type="text" id="summary" placeholder="Enter the summary of todo" className={Style.inputField}/>
                <input type="submit" className={Style.submitButton} value='Create'/>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTask : (title,summary,status) => dispatch({type: 'CREATETASK', title : title, summary : summary,
    status: 'InComplete'})
    }
}
export default connect(null,mapDispatchToProps)(Create);