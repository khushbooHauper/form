import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todoList:[]
}

export const TodoSlice = createSlice({
 name:'todo',
 initialState,
 reducers:{
   addTodo :(state,action)=>{
    state.todoList.push(action.payload)
   },
   deleteTodo:(state,action)=>{
    state.todoList = state.todoList.filter((todo)=> todo.id !== action.payload)
   },
   editTodo:(state,action)=>{
    state.todoList = state.todoList
      .map((todo)=>{
        if(todo.id===action.payload.id){
          todo.text=action.payload.text
        }
        return todo;
      })
   }
 }
})

export const {addTodo, deleteTodo, editTodo} = TodoSlice.actions;
export default TodoSlice.reducer;