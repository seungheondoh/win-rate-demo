import React from 'react';
import {RenderArea, Container} from '../../styles';

import Front from './front';

export default function Intro() {
    return(
        <RenderArea>
            <Container> 
                <Front/>
            </Container>
        </RenderArea>
    );
}