import React from 'react';
import { Input } from './style';

function InputComponent(props) {


    return (
        <>
            <Input 
                type={props.type} 
                name={props.name}
                value={props.value}
                onChange={(e) => {
                    props.onChange(e);
                }}
                id={props.name}
                placeholder={props.placeholder}
            />
        </>
    )
}

export default InputComponent;