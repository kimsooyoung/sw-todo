import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';
import { FaAngleDown } from "react-icons/fa";

const TodoInsert = ( { onInsert } ) => {
    const [ value, setValue ] = useState('');

    const onSubmit = useCallback( ( e ) => {
        onInsert( value );
        setValue( '' );
        e.preventDefault();
    }, [ value ])

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, [ value ] );

    return (
        <form className='TodoInsert' onSubmit={ onSubmit }>
            <input value={value} placeholder='Enter Todos...' onChange={onChange}/>
            <button >
                <FaAngleDown />
            </button>
        </form>
    )
}

export default React.memo( TodoInsert );