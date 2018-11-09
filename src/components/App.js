import React,{ Component } from 'react';
import Login from './Login/Login';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Edit from './Edit/Edit';
import Todos from './Todos/Todos';
import { connect } from 'react-redux';
import Create from './Create/Create';

class App extends Component{
    render(){
        const PrivateRoute = ({component : Component, ...rest}) => (
            <Route {...rest} render={(props)=> (
                this.props.isLoggedIn && this.props.role === "manager"
                ?<Component {...props} />
                :<Redirect to="/"/>
            )}/>
        )
        const SharedRoute = ({component : Component, ...rest}) => (
            <Route {...rest} render={(props)=> (
                this.props.isLoggedIn && this.props.role === "manager" || this.props.role === "employee"
                ?<Component {...props} />
                :<Redirect to="/"/>
            )}/>
        )
        return(
        <div>    
        <HashRouter>
        <Switch>   
        <PrivateRoute path="/edit/:id" component={Edit}/>
        <PrivateRoute path="/create" component={Create}/>
        <SharedRoute path="/todos" component={Todos}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Login}/>
        </Switch> 
        </HashRouter>
        </div>)
    }
}
const mapStateToProps = state => {
    return{
        isLoggedIn : state.loggedIn,
        role: state.currentRole
    };
};

export default connect(mapStateToProps)(App);