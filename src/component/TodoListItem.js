import React from 'react';
import './TodoListItem.scss';
import cn from 'classnames';
import { FaRegCircle, FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, title, checked } = todo;
    return (
        <div className='TodoListItem'>
            <div className='flex-display'>
                <div className={cn('checkbox', { checked } )} onClick={ () => onToggle(id) }>
                    { checked ? <FaRegCheckCircle />:<FaRegCircle /> }
                </div>
                <div className={cn('description', { checked } )}>
                    {title}
                </div>
            </div>
            <div className='remove' onClick={ () => onRemove(id) }>
                <FaRegTimesCircle />
            </div>
        </div>
    )
}

export default React.memo(TodoListItem);