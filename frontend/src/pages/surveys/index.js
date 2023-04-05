import React, { useContext } from 'react';
import {SurveyContext} from '../../hook/useSurveyData';
import {RenderArea, Container} from '../../styles';

import Tutorial from './tutorial';
import CheckSubmit from './checkSubmit'
import Finish from "./finish";


export default function Main() {
    const Context = useContext(SurveyContext);
    const { checkRender, checkFinish, tutorialIndex } = Context;
    
    let contents;
    if(checkFinish === true){
        contents = <Finish/>
    }else if(checkRender === true){
        contents = <CheckSubmit/>
    }else{
        contents = <Tutorial TutorialIndex = {tutorialIndex}/>
    }

    return(
        <RenderArea>
            <Container> 
                {contents}
            </Container>
        </RenderArea>
    );
}