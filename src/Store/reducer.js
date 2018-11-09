const initialState = {
    loggedIn : false,
    currentRole : '',
    todoList : [{
        title : "Title 1",
        summary : "Summary 1",
        status : "InComplete"
    },
    {
        title : "Title 2",
        summary : "Summary 2",
        status : "InComplete"
    }
],
    currentArray : []
}

const reducer = (state = initialState, action) => {
    if(action.type == 'LOGGEDIN'){
        return{
            ...state,
            loggedIn : true,
            currentRole : action.value
        }
    }
    if(action.type == 'LOGGEDOUT'){
        return{
            ...state,
            currentRole : '',
            loggedIn : false,
        }
    }
    if(action.type == 'CREATETASK'){
        return{
            ...state,
            todoList : [...state.todoList,
            {
                title : action.title,
                summary : action.summary,
                status : action.status,

            }]
        }
    }
    if(action.type == 'DELETETODO'){
        let deletedItem = state.todoList.splice(action.value,1);
        return{
            ...state,
            todoList : state.todoList.filter(function(d){return d !=deletedItem})
        }
    }
    if(action.type == 'CHANGEDSTATUS'){
        state.todoList[action.value].status = action.changedStatus;
        return{
            ...state,
            todoList : [...state.todoList]
        }
    }
    if(action.type == 'UPDATETODO'){
        state.todoList[action.value].title = action.cT;
        state.todoList[action.value].summary = action.cS;
        return{
            ...state,
            todoList : [...state.todoList]
        }
    }
    if(action.type == 'SELECTOPTION'){
        return{
            ...state,
            currentArray : action.array
        }
    }

    
    return state;
}

export default reducer;