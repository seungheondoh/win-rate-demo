import React from 'react';
import {Link} from 'react-router-dom';
import { SurveyConatiner,Middlebutton} from '../../styles';

export default function Page404() {
    return (
        <>
        <p>something wrong!</p>
        <SurveyConatiner>
            <Link to = {`${ process.env.PUBLIC_URL + "/" }`}>
                <Middlebutton type="submit">Home</Middlebutton>
            </Link>
        </SurveyConatiner>
        </>
    )

}