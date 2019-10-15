import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
    // console.log(children)
    return (
        <div className='TodoTemplate'>
            <div className='title'>
                Swiming Todo
             </div>
            <div className='content'>
                {children}
            </div>
        </div>
    )
}

export default React.memo(TodoTemplate);