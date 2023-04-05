import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import { SurveyContext } from '../../../hook/useSurveyData';
import { Middleinput, SurveyConatiner, SurveyContents, TextContainer,Middlebutton, H4label} from '../../../styles';

export default function Front() {
    const Context = useContext(SurveyContext)
    const {getSubmit, startSubmit} = Context
    
    return (
        <>
        <TextContainer>
        <h1>Welcome to Music Captioning User Test</h1>
            <h2>Introduction</h2>      
            <p>
            This survey is part of the research project “Music Captioning" conducted by Seungheon Doh (GSCT). The survey focuses on validating the relationship between the <b>Audio</b> and <b>Caption</b>. The estimated time for the survey is 15-25 minutes.
            </p>

            <p>
            Before conducting the experiment, brief personal information will be requested. The record and information will be never used for any purpose other than data analysis, and we promise not to leak it elsewhere. If you have any further questions regarding the experiment, please contact us via email: seungheondoh@kaist.ac.kr.
            </p>

            <form onSubmit={(e) => {e.preventDefault();}}>
                <SurveyConatiner>
                    <H4label>By reading the above, I agree to the use of personal information.</H4label>
                    <SurveyContents>
                        <input type="radio" name="useragree" value="yes" onChange={getSubmit}/>Agree
                        <input type="radio" name="useragree" value="no" onChange={getSubmit}/>Disagree
                    </SurveyContents>
                </SurveyConatiner>

                <SurveyConatiner>
                    <H4label>What is your name?</H4label>
                    <SurveyContents>
                        <Middleinput type="text" name="username" placeholder="Peter" onChange={getSubmit}/>
                    </SurveyContents>
                </SurveyConatiner>

                <SurveyConatiner>
                    <H4label>What are you from?</H4label>
                    <SurveyContents>
                        <Middleinput type="text" name="usercountry" placeholder="South Korea" onChange={getSubmit}/>
                    </SurveyContents>
                </SurveyConatiner>

                <SurveyConatiner>
                    <H4label>What is your favorite genre?</H4label>
                    <SurveyContents>
                        <input type="radio" name="userfavorgenre" value="Blues" onChange={getSubmit}/>Blues
                        <input type="radio" name="userfavorgenre" value="Country" onChange={getSubmit}/>Country
                        <input type="radio" name="userfavorgenre" value="Electronic" onChange={getSubmit}/>Electronic
                        <input type="radio" name="userfavorgenre" value="Folk" onChange={getSubmit}/>Folk
                        <input type="radio" name="userfavorgenre" value="Jazz" onChange={getSubmit}/>Jazz
                        <input type="radio" name="userfavorgenre" value="Latin" onChange={getSubmit}/>Latin
                        <input type="radio" name="userfavorgenre" value="Metal" onChange={getSubmit}/>Metal
                        <input type="radio" name="userfavorgenre" value="New Age" onChange={getSubmit}/>NewAge
                        <input type="radio" name="userfavorgenre" value="Pop" onChange={getSubmit}/>Pop
                        <input type="radio" name="userfavorgenre" value="Punk" onChange={getSubmit}/>Punk
                        <input type="radio" name="userfavorgenre" value="Rap" onChange={getSubmit}/>Rap
                        <input type="radio" name="userfavorgenre" value="Reggae" onChange={getSubmit}/>Reggae
                        <input type="radio" name="userfavorgenre" value="RnB" onChange={getSubmit}/>RnB
                        <input type="radio" name="userfavorgenre" value="Rock" onChange={getSubmit}/>Rock
                        <input type="radio" name="userfavorgenre" value="World" onChange={getSubmit}/>World
                    </SurveyContents>
                </SurveyConatiner>
            </form>
            
            <form onSubmit={(e) => {startSubmit(e); e.preventDefault();}}>
                <SurveyConatiner>
                    <Link to = {`${ process.env.PUBLIC_URL + "/Survey" }`}>
                        <Middlebutton type="submit">Start Survey</Middlebutton>
                    </Link>
                </SurveyConatiner>
            </form>
        </TextContainer>
        </>
    )

}