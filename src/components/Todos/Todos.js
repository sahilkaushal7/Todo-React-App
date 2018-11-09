import React, {Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import Todo from '../Todos/Todo/Todo';
import Styles from '../App.css';
import { NavLink } from 'react-router-dom';

class Todos extends Component{
    changeStatus = (e,index) => {
        let changedStatus = e.target.value;
        this.props.changeStat(index,changedStatus);
    }
    componentDidMount(){
        this.props.selectOption(this.props.todos);
    }
    deleteTodoHandler=(index)=>{
        this.props.selectOption(this.props.todos);
        this.props.deleteTodo(index);
    }
    render(){
        let todo;
        let deleteAble=false;
        let note;
        if(this.props.role === 'manager'){
            deleteAble=true;
            note=<b>Please click on the Todo's content to delete it</b>
        }
        let onCatSelect = (e) => {
            let selectCategory = (e.target.value);
            let newArray;
             
             if(selectCategory === 'All'){
                newArray = this.props.todos;
                this.props.selectOption(newArray);
             }
             else{
                newArray = this.props.todos.filter(element=>
                element.status === selectCategory);
                this.props.selectOption(newArray);
             }
            }
            todo = this.props.currentOption.map((tod,index)=>{
                    if(deleteAble){
                        return(
                            <div key={index} className={Styles.Todo}>
                            <div onClick={()=> this.deleteTodoHandler(index)} >
                            <Todo title={tod.title} summary={tod.summary} status={tod.status}></Todo>
                            </div>
                            <button><NavLink to={`/edit/${index}`}>Edit</NavLink></button>
                            </div>
                            
                        )
                    }
                    else{
                        return(<div key={index} className={Styles.Todo}>
                            <Todo title={tod.title} summary={tod.summary} status={tod.status}></Todo>
                            <b>Change Status :</b><br/><br/>
                            <select id="changedStatus" onChange={(e)=>this.changeStatus(e,index)} defaultValue="">
                                <option value="" disabled>Select</option>
                                <option value="Complete">Complete</option>
                                <option value="InComplete">InComplete</option>
                            </select>
                            </div>
                            )
                    }
                });     
        return(
            <div>
            <Navigation></Navigation>     
            <center>
            <h1>Your Todos<br/></h1>
            <p>{note}</p>
            <div>
            Sort By : <select id="selectCategory" onChange={(e)=>onCatSelect(e)}>
                <option value="All">All</option>
                <option value="InComplete">InComplete</option>
                <option value="Complete">Complete</option>
            </select><hr></hr>
            </div>
            </center>
            {todo}
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return{
        isLoggedIn : state.loggedIn,
        role: state.currentRole,
        todos : state.todoList,
        currentOption : state.currentArray
    };
};
const mapDispatchToProps = dispatch => {
    return {
        deleteTodo : (index) => dispatch({type: 'DELETETODO', value : index}),
        selectOption : (newArray) => dispatch({type: 'SELECTOPTION', array : newArray}),
        changeStat : (index,changedStatus) => dispatch({type: 'CHANGEDSTATUS', value : index, changedStatus : changedStatus})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos);