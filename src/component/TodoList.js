import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className='TodoList'>
            {todos.map( todo => {
                return <TodoListItem todo={todo} onRemove={onRemove} onToggle={onToggle} key={todo.id}></TodoListItem>
            })}
         </div>
    )
}

export default React.memo(TodoList);