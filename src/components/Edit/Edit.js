import React, {Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import Style from '../App.css';

class Edit extends Component{
    updateTodoHandler=(e,index)=>{
        e.preventDefault();
        let cTitle = document.getElementById('changedTitle').value;
        let cSummary = document.getElementById('changedSummary').value;
        this.props.updateTodo(index,cTitle,cSummary);
        this.props.history.push('/todos');
    }
    render(){
        let id = this.props.match.params.id;
        return(
            <div>
                <Navigation></Navigation> 
                <center><h1>Edit Your Todo</h1><hr></hr></center>
                <form onSubmit={(e)=>this.updateTodoHandler(e,id)} className={Style.Form}>
                    <input type="text" id="changedTitle" placeholder={this.props.todoList[id].title} className={Style.inputField}/>
                    <input type="text" id="changedSummary" placeholder={this.props.todoList[id].summary} className={Style.inputField}/>
                    <input type="submit" className={Style.submitButton} value='Edit'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        todoList : state.todoList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateTodo : (index,cTitle,cSummary) => dispatch({type: 'UPDATETODO', value: index, cT : cTitle, cS: cSummary})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Edit);