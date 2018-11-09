import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import  Styles  from '../App.css';
class Navigation extends React.Component {
    render(){
        let Nav;
        if(this.props.isLoggedIn === true && this.props.role === 'manager')
        {
            Nav = (
                <div className={Styles.Nav}>
                <ul>
                <li><NavLink to="/todos">Todos</NavLink></li>
                <li><NavLink to="/create">Create</NavLink></li>
                <li><NavLink to="/logout" onClick={this.props.onLoggingOut}>Logout</NavLink></li>
                </ul>
                </div>
            )
        }
        else if(this.props.isLoggedIn === true && this.props.role === 'employee')
        {
            Nav = (
                <div className={Styles.Nav}> 
                <ul>
                <li><NavLink to="/todos">Todos</NavLink></li>
                <li><NavLink to="/logout" onClick={this.props.onLoggingOut}>Logout</NavLink></li>
                </ul>
                
                </div>
            )
        }
        else {
            Nav = (<div>Please Login in To Continue</div>)
        }        
        return(<div className={Styles.Nav}>{Nav}</div>)
    }
}

const mapStateToProps = state => {
    return{
        isLoggedIn : state.loggedIn,
        role: state.currentRole
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoggingOut : (role) => dispatch({type: 'LOGGEDOUT'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navigation);