import React, { useContext } from 'react';
import { SurveyContext } from '../../../hook/useSurveyData';
import {  BoldText, SurveyConatiner, InfoContainer,Middlebutton } from '../../../styles';

export default function CheckSubmit() {
    const Context = useContext(SurveyContext)
    const {tempBreak, checkSubmit} = Context
    return (
        <>
        <InfoContainer>
            <SurveyConatiner>
                <h1>Check Your Submit</h1>
                <h2> Survey Result </h2>
                <p>
                    If 60 main survey data have been collected, click the final Move to Next button.
                </p>
                <br/><br/>
                    <BoldText>Main Survey : {Object.keys(tempBreak).length} / 20</BoldText>
                <br/>
            </SurveyConatiner>
                <form onSubmit={(e) => {checkSubmit(e); e.preventDefault();}}>
                    <SurveyConatiner>
                    <label>If there is any missing data, please send an e-mail to seungheondoh@kaist.ac.kr.</label>
                    <Middlebutton type="submit">Move to Next</Middlebutton>
                    </SurveyConatiner>
                </form>
        </InfoContainer>
        </>
    )

}