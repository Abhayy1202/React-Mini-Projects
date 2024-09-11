import React, { useContext } from "react";

export const TodoContext= React.createContext({
    todos: [{
        id:1,
        todo:"Todo Msg",
        completed:false,
    }],
     addTodo:(id)=>{},
     updateTodo:(id,todo)=>{},
     deleteTodo:(id)=>{},
     toggleComplete:(id)=>{}

})
export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider