import React from 'react';

//Styles
import { Wrapper, Content } from './Grid.styles';

const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{ header }</h1>
    </Wrapper>
)


export default Grid;