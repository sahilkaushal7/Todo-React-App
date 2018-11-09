import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Style from '../App.css';

class Login extends Component{
    users = [
        {
            name : "employee", password:"employee", role:"employee"
        },
        {
            name : "manager", password:"manager", role:"manager"
        }
    ]
    onLogginClick = (e) => {
        e.preventDefault();
        let userId = document.getElementById('id').value;
        let userPass = document.getElementById('pass').value;
        for(let i = 0 ; i < this.users.length; i++)
        {
            if(userId == this.users[i].name && userPass == this.users[i].password)
            {   
                this.props.onLoggingIn(this.users[i].role);
                this.props.history.push('/todos'); 
            }
        }
    }
    render(){
        return( 
            <form onSubmit={this.onLogginClick} className={Style.Form}>
            <h1>Please Login</h1>
            <input type="text" id="id" placeholder = "Enter Your Username" className={Style.inputField} required/>
            <input type="password" id="pass" placeholder = "Enter Your Password" className={Style.inputField} required/>
            <input type="submit" value="Login" className={Style.submitButton}/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoggingIn : (role) => dispatch({type: 'LOGGEDIN', value : role})
    }
}
export default connect(null,mapDispatchToProps)(Login);