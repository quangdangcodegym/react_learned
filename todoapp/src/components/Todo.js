import React from 'react';
import TodoList from './TodoList';
import Button from '@atlaskit/button';
import styled from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;
    &:hover{
        .check-icon{
            display: inline-block;
        }
    }
    .check-icon{
        display: none;
        &:hover{
            background-color: #e2e2e2;
            border-radius: 3px;
        }
    }
`
export default function Todo({todo}){
    console.info(todo)
    return (
        <ButtonStyled shouldFitContainer iconAfter={<span className='check-icon'><CheckIcon primaryColor='#4fff4f' /></span>}>{todo.name}</ButtonStyled>
    );
}