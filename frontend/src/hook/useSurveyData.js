import React, { useState, useContext } from 'react';
import {MetaContext} from './useMetaData';
import uuid from 'uuid/v4';

const SurveyContext = React.createContext()

const SurveyProvider = (props) => {

    const mainContext = useContext(MetaContext);
    const {tutorialdata, setTutoiraldata} = mainContext;
    const [postId, setPostId] = useState(null)
    const [userdata, setUserData] = useState({
        uid : uuid(),
        userAgree : "",
        userName : "",
        userCountry : "",
        userAge : "",
        userMusicLevel : "",
        userMusicSearchLevel : "",
        userFavorGenre : "",
        getModel : "",
        startTime : new Date(),
        endTime : new Date(),
        breakSurvey: {},
        finalSubmit : false,
        datasets : []
    });

    // expdata from json data
    const [input, setInput] = useState('');    
    const [tutorialIndex, setTutorialIndex] = useState(0);
    const [surveyRender, setSurveyRender] = useState(false);
    const [tutorialRender, setTutorialRender] = useState(false);
    const [checkRender, setCheckRender] = useState(false);
    const [checkFinish, setFinishRender] = useState(false);

    //tempExp
    const [tempBreak, setTempBreak] = useState({[tutorialIndex]:[]});

    //BreakSurvey
    const [breakData, setBreakData] = useState({
        precision : "",
        recall : "",
    });

    // function onInput(e){
    //     console.log(e.target.id);
    //     if(e.target.id === 'test0'){
    //         const temp = e.target.value
    //         setBreakData(breakData => ({...breakData, Test0 : temp}))
    //     }else if(e.target.id === 'test1'){
    //         const temp = e.target.value
    //         setBreakData(breakData => ({...breakData, Test1 : temp}))
    //     }else if(e.target.id === 'test2'){
    //         const temp = e.target.value
    //         setBreakData(breakData => ({...breakData, Test2 : temp}))
    //     }else if(e.target.id === 'test3'){
    //         const temp = e.target.value
    //         setBreakData(breakData => ({...breakData, Test3 : temp}))
    //     }else if(e.target.id === 'test4'){
    //         const temp = e.target.value
    //         setBreakData(breakData => ({...breakData, Test4 : temp}))
    //     }
    // }

    function startSubmit(e){
        setUserData(userdata => ({...userdata, startTime : new Date()}))
        setBreakData(breakData => ({...breakData, precision : "-1"}))
        setBreakData(breakData => ({...breakData, recall : "-1"}))
        setTutorialRender(true)
        setSurveyRender(true)
        setInput(0)
        window.scrollTo(0, 0)
    }

    function checkSubmit(e){
        setUserData(userdata => ({...userdata, breakSurvey : tempBreak}));
        setCheckRender(false);
        setFinishRender(true);
    }

    function BreakSubmit(e){
        setTempBreak({...tempBreak, [tutorialIndex]:breakData});
        window.scrollTo(0, 0);
        e.target.reset();
        if(tutorialIndex < 19){
            // setBreakData(breakData => ({...breakData, trial_id : tutorialIndex}))
            // setBreakData(breakData => ({...breakData, precision : "-1"}))
            // setBreakData(breakData => ({...breakData, recall : "-1"}))
            setTutorialIndex(tutorialIndex + 1);
        }else{
            setTutorialRender(false);
            setCheckRender(true);
            setUserData(userdata => ({...userdata, datasets : tutorialdata}))
            setUserData(userdata => ({...userdata, finalSubmit : true}));
            setUserData(userdata => ({...userdata, endTime : new Date()}))
            setTutorialIndex(tutorialIndex + 1);
        }
    }

    function getInput(e){
        setInput(e.target.value)
    }
    
    function getSubmit(e){
        if(e.target.name === 'useragree'){
            const temp = e.target.value
            setUserData(userdata => ({...userdata, userAgree : temp}))
        }else if(e.target.name === 'username'){
            const temp = e.target.value
            setUserData(userdata => ({...userdata, userName : temp}))
        }else if(e.target.name === 'usercountry'){
            const temp = e.target.value
            setUserData(userdata => ({...userdata, userCountry : temp}))
        }else if(e.target.name === 'userage'){
            const temp = e.target.value
            setUserData(userdata => ({...userdata, userAge : temp}))
        }else if(e.target.name === 'usermusiclevel'){
            const temp = e.target.value
            setUserData(userdata => ({...userdata, userMusicLevel : temp}))
        }else if(e.target.name === 'usermusicsearchlevel'){
            const temp = e.target.value
            setUserData(userdata => ({...userdata, userMusicSearchLevel : temp}))
        }else if(e.target.name === 'userfavorgenre'){
            const temp = e.target.value
            setUserData(userdata => ({...userdata, userFavorGenre : temp}))
        }else if(e.target.name === 'precision'){
            const temp = e.target.value
            setBreakData(breakData => ({...breakData, precision : temp}))
        }else if(e.target.name === 'recall'){
            const temp = e.target.value
            setBreakData(breakData => ({...breakData, recall : temp}))
        }
    }


    async function dataSubmit(e){
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
            body: JSON.stringify(userdata)
        };
        fetch('http://143.248.249.113:7777/results', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
        alert('Finish Session Thanks :)');
    }

    return (
		<SurveyContext.Provider value={{
            userdata,
            tutorialRender,
            tutorialIndex,
            surveyRender,
            checkRender,
            checkFinish,
            tempBreak,
            input,
            breakData,
            postId,
            BreakSubmit,
            setInput,
            getInput,
            checkSubmit,
            startSubmit,
            getSubmit,
            dataSubmit
		}}>
			{props.children}
		</SurveyContext.Provider>
	)
}


const SurveyConsumer = SurveyContext.Consumer
export { SurveyProvider, SurveyConsumer, SurveyContext }