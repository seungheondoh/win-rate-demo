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
        trial_id : "",
        annotation : "",
        fairpriv : "",
    });

    function onInput(e){
        if(e.target.id === 'test0'){
            const temp = e.target.value
            setBreakData(breakData => ({...breakData, Test0 : temp}))
        }else if(e.target.id === 'test1'){
            const temp = e.target.value
            setBreakData(breakData => ({...breakData, Test1 : temp}))
        }else if(e.target.id === 'test2'){
            const temp = e.target.value
            setBreakData(breakData => ({...breakData, Test2 : temp}))
        }else if(e.target.id === 'test3'){
            const temp = e.target.value
            setBreakData(breakData => ({...breakData, Test3 : temp}))
        }else if(e.target.id === 'test4'){
            const temp = e.target.value
            setBreakData(breakData => ({...breakData, Test4 : temp}))
        }
    }

    function startSubmit(e){
        setUserData(userdata => ({...userdata, startTime : new Date()}))
        setBreakData(breakData => ({...breakData, trial_id : tutorialdata[tutorialIndex]}))
        setBreakData(breakData => ({...breakData, annotation : "-1"}))
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
        if(tutorialIndex < 59){
            setBreakData(breakData => ({...breakData, trial_id : tutorialdata[tutorialIndex]}))
            setBreakData(breakData => ({...breakData, annotation : "-1"}))
            setBreakData(breakData => ({...breakData, fairpriv : "-1"}))
            setTutorialIndex(tutorialIndex + 1);
        }else{
            setTutorialRender(false);
            setCheckRender(true);
            setUserData(userdata => ({...userdata, finalSubmit : true}));
            setUserData(userdata => ({...userdata, endTime : new Date()}))
            setTutorialIndex(tutorialIndex + 1);
        }
    }

    function getInput(e){
        setInput(e.target.value)
    }
    
    function SelectTutorialData(model){
        const item_list = require("../assets/data/item_list.json");
        const sampleData = getRandomSampled(item_list[model], 60);
        setTutoiraldata(sampleData)
    }

    function getRandomSampled(arr, size) {
		var shuffled = arr.slice(0), i = arr.length, temp, index;
		while (i--) {
			index = Math.floor((i + 1) * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled.slice(0, size);
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
        }else if(e.target.name === 'get_model'){
            const temp = e.target.value
            setUserData(userdata => ({...userdata, getModel : temp}))
            SelectTutorialData(temp);
        }else if(e.target.name === 'annotation'){
            const temp = e.target.value
            setBreakData(breakData => ({...breakData, annotation : temp}))
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
        fetch('http://mac-chopin21.kaist.ac.kr:3306/results', requestOptions)
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
            onInput,
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