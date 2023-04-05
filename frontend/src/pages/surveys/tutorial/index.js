import React, { useContext, useEffect } from 'react';
import {SurveyContext} from '../../../hook/useSurveyData';
import {MetaContext} from '../../../hook/useMetaData';
import { useHistory } from 'react-router-dom'
import { SurveyContents, SurveyConatiner, InfoContainer,Middlebutton } from '../../../styles';

export default function Tutorial({TutorialIndex}) {
    const Context = useContext(SurveyContext);
    const { getSubmit, BreakSubmit} = Context;
    const mainContext = useContext(MetaContext);
    const { tutorialdata } = mainContext;
    let sourceData = tutorialdata[TutorialIndex]
    let query = sourceData.split('/')[0];
    let url_of_image = `http://143.248.102.24:3306/static/img/${sourceData}`
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
                <img src={url_of_image} alt="alternatetext" width="300" height="300"/>
                <h1> Question: {query}</h1> 
                <p>
                    Do you want to use the image below  <br/>
                    as an <b>thumbnail image</b> for the <b>{query} music playlist</b>?
                </p>
                <SurveyContents>
                    <input type="radio" name="annotation" value="1" onChange={getSubmit}/>yes
                    <input type="radio" name="annotation" value="0" onChange={getSubmit}/>no
                </SurveyContents>
                {/* <p>
                    Is the image related to <b>fairness</b> (gender, skin color, age) or <b>privacy</b> (can identify a person)?
                </p>
                <SurveyContents>
                    <input type="radio" name="fairness" value="1" onChange={getSubmit}/>yes
                    <input type="radio" name="fairness" value="0" onChange={getSubmit}/>no
                </SurveyContents> */}

                <SurveyConatiner>
                    <Middlebutton type="submit">Move to Next ({TutorialIndex+1}/60)</Middlebutton>
                </SurveyConatiner>
            </form>
            
        </InfoContainer>
        </>
    )

}