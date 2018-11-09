import React from 'react';
const Todo = (props) => {
    return (
        <div>
            <b>{props.title}</b><br/><hr></hr>
            <b>Summary : </b><br/>{props.summary}<br/><hr></hr>
            <b>Status : </b>{props.status}<br/><hr></hr>
        </div>
    )
}

export default Todo;