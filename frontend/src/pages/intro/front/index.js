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
        <h1>Welcome to Music Thumbnail Annotation</h1>
            <h2>Introduction</h2>      
            <p>
            This survey is part of the research project “Music Thumbnail Dataset” conducted by Seungheon Doh, Junwon Lee (GSCT). <br/>
            The survey focuses on validating the relationship between the <b>Tag</b> and <b>Image</b>. Assuming a scenario in which the user searches a desirable thumbnail image (for their music playlist) through Text-Query, the relationship between the Text Query and the Retrieved Image is measured. The estimated time for the survey is 15-25 minutes.
            </p>

            <p>
            Before conducting the experiment, brief personal information will be requested. <br/>
            The record and information will be never used for any purpose other than data analysis, and we promise not to leak it elsewhere. If you have any further questions regarding the experiment, please contact us via email: seungheondoh@kaist.ac.kr  james39@kaist.ac.kr .
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
                    <H4label>What is your age group?</H4label>
                    <SurveyContents>
                        <input type="radio" name="userage" value="10" onChange={getSubmit}/>10s
                        <input type="radio" name="userage" value="20" onChange={getSubmit}/>20s
                        <input type="radio" name="userage" value="30" onChange={getSubmit}/>30s
                        <input type="radio" name="userage" value="40" onChange={getSubmit}/>40s
                        <input type="radio" name="userage" value="50" onChange={getSubmit}/>50s
                        <input type="radio" name="userage" value="60" onChange={getSubmit}/>60s
                    </SurveyContents>
                </SurveyConatiner>

                <SurveyConatiner>
                    <H4label>Have you had any professional music training experience?</H4label>
                    <SurveyContents>
                        <input type="radio" name="usermusiclevel" value="none" onChange={getSubmit}/>None
                        <input type="radio" name="usermusiclevel" value="less6" onChange={getSubmit}/>less than 1 year
                        <input type="radio" name="usermusiclevel" value="more6less12" onChange={getSubmit}/>more than 1 year, less than 2 year
                        <input type="radio" name="usermusiclevel" value="more12less24" onChange={getSubmit}/>more than 2 year, less than 2 year
                        <input type="radio" name="usermusiclevel" value="more24" onChange={getSubmit}/>more than 2 year
                    </SurveyContents>
                </SurveyConatiner>

                <SurveyConatiner>
                    <H4label>How long do you spend listening or playing music a week?</H4label>
                    <SurveyContents>
                        <input type="radio" name="usermusicsearchlevel" value="none" onChange={getSubmit}/>None
                        <input type="radio" name="usermusicsearchlevel" value="less5" onChange={getSubmit}/>less than 5 times
                        <input type="radio" name="usermusicsearchlevel" value="more5less10" onChange={getSubmit}/>more than 5 times, less than 10 times
                        <input type="radio" name="usermusicsearchlevel" value="more10less20" onChange={getSubmit}/>more than 10 times, less than 15 times
                        <input type="radio" name="usermusicsearchlevel" value="more20" onChange={getSubmit}/>more than 15 times.
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

                <SurveyConatiner>
                    <H4label>Select one of Playlist Category! (Anything is OK)</H4label>
                    <SurveyContents>
                        <input type="radio" name="get_model" value="mood" onChange={getSubmit}/>Mood
                        <input type="radio" name="get_model" value="theme" onChange={getSubmit}/>Theme
                        <input type="radio" name="get_model" value="activity" onChange={getSubmit}/>Activity
                        <input type="radio" name="get_model" value="location" onChange={getSubmit}/>Location
                        <input type="radio" name="get_model" value="time" onChange={getSubmit}/>Time
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