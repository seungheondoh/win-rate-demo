import React, { useContext, useEffect } from 'react';
import {SurveyContext} from '../../../hook/useSurveyData';
import {MetaContext} from '../../../hook/useMetaData';
import { useHistory } from 'react-router-dom'
import { SurveyContents, SurveyConatiner, InfoContainer,Middlebutton,DescDiv,DescText,BreakRowDiv} from '../../../styles';

export default function Tutorial({TutorialIndex}) {
    const Context = useContext(SurveyContext);
    const {tempBreak, getSubmit, BreakSubmit} = Context;
    const mainContext = useContext(MetaContext);
    const { tutorialdata } = mainContext;
    let sourceData = tutorialdata[TutorialIndex];
    let option1 = sourceData['option1'].split(".");
    let option2 = sourceData['option2'].split(".");
    const option1_str = option1.map((number) =>
        <p>{number}</p>
    );
    const option2_str = option2.map((number) =>
        <p>{number}</p>
    );

    let fname = sourceData['audio_sample'];
    let audio_path = `http://143.248.249.113:7777/static/wav/${fname}.wav`
    const history = useHistory()
    
    useEffect(() => {
        return () => {
            if (history.action === 'POP') {
                alert('Be careful! If you leave now, all experimental data will be lost.')
                history.go(1);
            }
        };
    }, [history]);

    return (
        <>
        <InfoContainer>
            <form onSubmit={(e) => {BreakSubmit(e); e.preventDefault();}}>
                <h1> Please just focus on how well the text macthes the music </h1> 
                <audio 
                    controls id="player" 
                    src= {audio_path}
                />
                <BreakRowDiv>
                    <DescDiv>
                        <DescText><b>Option1</b> <br/> {option1_str}</DescText>
                    </DescDiv>
                    <DescDiv>
                        <DescText><b>Option2</b> <br/> {option2_str}</DescText>
                    </DescDiv>
                </BreakRowDiv>
                <h3>
                    Q1. Which text caption best describes the attributes of given music?
                </h3>
                <div><input type="radio" name="precision" value="P1" onChange={getSubmit}/> Strong preference for option1</div>
                <div><input type="radio" name="precision" value="P2" onChange={getSubmit}/> Weak preference for option1</div>
                <div><input type="radio" name="precision" value="P3" onChange={getSubmit}/> No preference</div>
                <div><input type="radio" name="precision" value="P4" onChange={getSubmit}/> Weak preference for option2</div>
                <div><input type="radio" name="precision" value="P5" onChange={getSubmit}/> Strong preference for option2</div>                

                <h3>
                    Q2. Which text caption is less describes the wrong attribute of given music?
                </h3>
                <div><input type="radio" name="recall" value="R1" onChange={getSubmit}/> Strongly, option 1 has fewer errors.</div>
                <div><input type="radio" name="recall" value="R2" onChange={getSubmit}/> Weakly, option 1 has fewer errors</div>
                <div><input type="radio" name="recall" value="R3" onChange={getSubmit}/> No difference</div>
                <div><input type="radio" name="recall" value="R4" onChange={getSubmit}/> Weakly, option 2 has fewer errors</div>
                <div><input type="radio" name="recall" value="R5" onChange={getSubmit}/> Strongly, option 2 has fewer errors</div>                


                <SurveyConatiner>
                    <Middlebutton type="submit">Move to Next ({TutorialIndex+1}/20)</Middlebutton>
                </SurveyConatiner>
            </form>
            
        </InfoContainer>
        </>
    )

}