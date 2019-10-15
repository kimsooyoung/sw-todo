import React, { useCallback, useRef, useReducer } from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

const CONTENT_NUMBER = 5;

const createBulk = ( ) => {
  const arr = [];
  for( let a = 0; a < CONTENT_NUMBER; a++){
     arr.push({
       id: a,
       title: `${a} th Content ( Example )`,
       checked: a%2 === 0 ? false:true
     })
  }
  return arr;
}

const todoReducer = ( todos, action ) => {
  switch ( action.type ) {
    case 'INSERT':
      return todos.concat( action.newTodo )
    case 'REMOVE':
      return todos.filter( todo => todo.id !== action.id )
    case 'TOGGLE':
      return todos.map( todo => todo.id !== action.id ? todo:{ ...todo, checked: !todo.checked} )
    default:
      break;
  }
}

const App = () => {
  const [ todos, dispatch ] = useReducer( todoReducer, undefined, createBulk );
  const nextId = useRef( CONTENT_NUMBER );

  const onRemove = useCallback( id => {
    dispatch({ type: 'REMOVE', id })
    // setTodos( todos => todos.filter( todo => todo.id !== id ) )
  }, [ ])

  const onInsert = useCallback( description => {
    const newTodo = {
      id: nextId.current,
      title: description,
      checked: false
    }
    dispatch( { type: 'INSERT', newTodo } )
    // setTodos( todos => todos.concat( newTodo ) );
    nextId.current += 1;
  }, [ ] )

  const onToggle = useCallback( id => {
    dispatch( { type: 'TOGGLE', id } )
    // setTodos( todos => todos.map( todo => todo.id !== id ? todo: { ...todo, checked:!todo.checked } ) )
  }, [ ] )

  console.log( todos.map( todo => todo.id ) );
  
  return (
    <div className='App'>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
