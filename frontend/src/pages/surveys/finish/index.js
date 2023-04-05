import React, { useContext } from 'react';
import { SurveyContext } from '../../../hook/useSurveyData';
import { TextContainer,Middlebutton} from '../../../styles';


export default function Finish() {
    const Context = useContext(SurveyContext)
    const {userdata, dataSubmit} = Context
    console.log(userdata);
    return (
        <>
        <TextContainer>
        <h1>FINISH</h1>
                <p>
                Please click the Submit Results button!
                </p>
                <form onSubmit={(e) => {dataSubmit(e); e.preventDefault();}}>
                    <Middlebutton type="submit">Submit Result</Middlebutton>
                </form>
        </TextContainer>
        </>
    )

}