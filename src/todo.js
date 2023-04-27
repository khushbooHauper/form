import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,deleteTodo ,editTodo} from './TodoSlice';
import { v4 as uuidv4 } from 'uuid';

const list = [
    'milk','sugar','chochlate'
]
export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todo.todoList)
    const [text, setText] = useState('');
    const [editId, setEditId] = useState(null);
    const handleAdd = () => {
        if (editId) {
          dispatch(editTodo({
            id: editId,
            text
          }));
          setEditId(null);
        } else {
          const id = uuidv4();
          dispatch(addTodo({
            id,
            text
          }));
        }
        setText('');
      };
    
      const handleEdit = (id, text) => {
        setEditId(id);
        setText(text);
      };
  return (
    <div className='mt-3'>
      <input type='text' value={text} onChange={(e)=> setText(e.target.value)}/>
      <Button variant='primary' onClick={handleAdd}>{editId ? 'Update' : 'Add'}</Button>
      <div>
        <ul>
           {todos && todos.map((item)=>(
            <div key={item.id} className='d-flex justify-content-between p-4 ml-4'>
            <li>{item.text}</li>
            <Button onClick={()=>handleEdit(item.id, item.text)}>edit</Button>
            <Button onClick={()=>dispatch(deleteTodo(item.id))}>delete</Button>
            </div>
           ))}
           
        </ul>
      </div>
    </div>
  )
}
