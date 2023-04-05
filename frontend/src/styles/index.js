import styled from 'styled-components';

// global
export const GlobalStyles = styled.div `
    font-family: sans-serif;

    a{
        text-decoration:none;
        color:inherit;
    }

    body{
        font-family: sans-serif;
        color:black;
        background-color:rgba(15,15,15,1);
        margin:0;
    }
`;

export const H4label = styled.label `
    font-size: 18px;
    font-weight: bold;
    margin: 0;
`;


export const Title = styled.span `
    font-size: 15px;
    font-weight: bold;
    display: block;
`;


export const DescContainer = styled.div`
    width: 80%;
    background: rgba(250,250,250,1);
    margin: 20px;
`;


export const BoldText = styled.div`
    font-weight : bold;
    font-size : 18px;
    border-bottom: 1px solid rgba(255,255,255,1);
`;


export const Middlebutton = styled.button`
    display: inline-flex;
    margin-top : 20px;
    background : none;
    font-size : 20px;
    border: 2px solid rgba(15,15,15,1);
    color: rgba(15,15,15,1);
    text-transform: uppercase;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        transition: all .35s ease-Out;
        background: rgba(15,15,15,1);
        color: rgba(255,255,255,1);   
      }
  `;

export const Img43 = styled.div `
    height : 43em;
    width: 100%;
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
`;

export const Img30 = styled.div `
    height : 30em;
    width: 100%;
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
`;

export const Img20 = styled.div `
    height : 20em;
    width: 100%;
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
`;

//main.js
export const Header = styled.div `
    font-size: 3em;
    font-weight: bold;
`

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin : 3em 3em 5em 3em;
`;

export const SearchContainer = styled.form `
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
`

export const Select = styled.div `
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
`
export const RenderArea = styled.div `
    color : rgba(15, 15, 15, 1);
    background-color : rgba(255, 255, 255, 1);
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    margin-bottom : 100px;
`

// ./src/component/PlayerControls/index.js

export const ArtistName = styled.span `
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  display: block;
`;

export const InfoBar = styled.div `
    display : flex;
    justify-content: space-between;
    align-items: center;
    position : fixed;
    bottom: 0;
    width: 100vw;
    height : 80px;
    background-color: rgba(15,15,15,1);
    z-index: 20;
    color : rgba(15,15,15,1);
`;

export const InfoDiv = styled.div `
    left: 5%;
    position : fixed;
`;


export const ButtonDiv = styled.div `
    display: block;
`;

export const CenterDiv = styled.div `
    display: flex;
    flex-direction : column;
    align-items: center;
    left: 30%;
    width : 40%;
    position : fixed;
`;

export const ControlDiv = styled.div `
    right: 5%;
    position : fixed;
`;

export const ColumnsDiv50 = styled.div `
    width : 100%
    display : flex;
    flex-direction: column;
    align-items: center;
`;

export const ColumnsDiv = styled.div `
    margin-left : 10px;
    display : flex;
    flex-direction: column;
    align-items: left;
`;

export const DescDiv = styled.div`
    width: 500px;
    margin-left : 30px;
    border: 10px;
    display : flex;
    background-color: rgba(240,240,240,1);
    border-radius: 10px;
    flex-direction: column;
    align-items: left;
`;


export const DescText = styled.div`
    margin: 20px;
    font-size: 15px;
    text-align: left;
`;

export const DefaultButton = styled.button `
    cursor: pointer;
    background: none;
    border: none;
    text-decoration: none;
    color : rgba(15,15,15,1);
    margin: 0em;
    transition: 0.5s all ease-out;
    &:hover {
        color: yellow;
    }
`;

export const SongButton = styled.button `
    cursor: pointer;
    background: none;
    border: none;
    color : rgba(15,15,15,1);
    margin: 1em;
    transition: 0.5s all ease-out;
    &:hover {
    color: rgba(15,15,15,1);
    }
`;


// ./src/component/PlayerControls/Bar.js

export const BarStyle = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
`;

export const BarTime = styled.span `
    color: rgba(255,255,255,0.5);
    font-size: 12px;
`;

export const BarProgress = styled.div `
    flex: 1;
    margin: 0 20px;
    height: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const BarProgressKnob = styled.span `
    position: relative;
    height: 5px;
    width: 5px;
    background-color: darkgray;
    border-radius: 50%;
`;


// ./src/component/textUI

export const TextUITableHeader = styled.div `
    opacity: 1;
    font-size: 15px;
    width: ${(props) => props.width? props.width: "40%"};
    justify-content: space-between;
    text-align: left;
    font-weight: bold;
    margin : 10px 0px 10px 20px;
`


export const TextUITitle = styled.div `
    font-size : 18px;
    margin-left:10px;
`

export const ImportantItem = styled.th `
    font-size: 15px;
    width: ${(props) => props.width? props.width: "80%"};
    text-align: left;
    margin-left : 10px;
`

export const SearchItemValue = styled.th `
    opacity: 0.9;
    font-size: 15px;
    width: ${(props) => props.width? props.width: "40%"};
    justify-content: space-between;
    text-align: left;
    font-weight: normal;
    margin : 10px 0px 10px 20px;
`
export const SearchItem = styled.tr `
    width: 100%;
`
export const SearchResults = styled.table `
    color: rgba(15,15,15,1);
    width: 100%;
`


export const Tablediv = styled.span `
    width : 100%;
    display: flex;
    flex-direction : row;
    align-items : center;
    border-bottom: solid 1px rgba(255,255,255,0.2);
    &:hover{
        border: solid 1px rgba(15,15,15,1);
    }
`;

// ./src/component/survey/break

export const BreakRowDiv = styled.div `
    width : 100%;
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    margin : 20px;
`;


export const BreakValue = styled.div`
    font-weight : bold;
    font-size : 18px;
    border-bottom: 1px solid rgba(255,255,255,1);
`;

export const BreakText = styled.div`
    color: rgba(15,15,15,0.5);
`;

export const BreakSlider = styled.div`
    > input[type=range] {
        -webkit-appearance: none;
        margin: 18px 0;
        width: 100%;
    }
    > input[type=range]:focus {
        outline: none;
    }
    > input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 7px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: rgba(125,125,125,1);
        border-radius: px;
        border: 0.2px solid #010101;
    }
    > input[type=range]::-webkit-slider-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -14px;
    }
`;

// ./src/component/surveys/info_nore

export const InfoContainer = styled.div`
    padding : 0 10% 0 10%;
    width : 100%;
    display: flex;
    text-align: center; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const InfoContents = styled.div`
    width : 100%;
    display: flex;
    border-top: solid 1px rgba(255,255,255,0.4);
    flex-direction: column;
`

export const InfoContentsYellow = styled.div`
    width : 100%;
    display: flex;
    border-top: solid 1px rgba(255,255,255,0.4);
    flex-direction: column;
    color : yellow;
`

export const InfoRowDiv = styled.div `
    width : 100%;
    display : flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const InfoGenre = styled.div`
    margin : 20px 0 20px 0;
`;

// ./src/component/surveys/infoRe

export const InfoReContainer = styled.div `
    margin-bottom : 4em;
    width : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InfoReGrid = styled.div `
    display: grid;
    margin: auto;
    width : 100%;
    grid-template-columns: repeat(2, 300px);
    grid-gap: 6em 4em;
    align-items: center;
    justify-content: center;
`;

export const InfoReContents = styled.div`
    width : 100%;
    margin-top : 3em;
    padding-top : 3em;
    display: flex;
    border-top: solid 1px rgba(255,255,255,0.4);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color : yellow;
    font-size : 1.5em;
`


// ./src/component/surveys/intro

export const TextContainer = styled.div`
    padding : 0 10% 0 10%;
    width : 71%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SurveyConatiner = styled.div`
    padding : 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SurveyContents = styled.div`
    padding : 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    > input[type="radio"]{
        margin-left: 10px;
      }
`

// ./src/component/survey/main

export const Clickdiv = styled.span `
    width:250px;
    height:250px;
`;

export const GridContainer = styled.div `
    margin : 2em;
    width : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Grid = styled.div `
    display: grid;
    margin: 40px;
    width : 100%;
    grid-template-columns: repeat(2, 300px);
    grid-gap: 6em 6em;
    align-items: center;
    justify-content: center;
`;

// ./src/component/survey/maintest/ThumbExam

export const YellowText = styled.span `
    color : yellow;
`;

// ./src/component/survey/maintest/ThumbExam

export const ThumbExamTitle = styled.span `
    font-size: 2em;
    font-weight: bold;
    display: block;
`;

// ./src/component/Thumnail/ThumAll
export const Image = styled.div `
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: rgba(25,25,25,0.8);
    height: 250px;
    border-radius: 3px;
    transition: opacity 0.1s linear;
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    /* opacity: 0.2;
     */
`;

export const ImageContainer = styled.div `
  margin-bottom: 10px;
  position: relative;
  background-color: rgba(25,25,25,0.8);
`;

export const SongContainer = styled.div `
    font-size: 15px;
    width : 100%;
`;

export const AVdiv = styled.span `
    bottom: 10px;
    left: 10px;
    position: absolute;
    z-index: 10;
    opacity: 0.9;
    font-size : 12px;
    transition: opacity 0.1s linear;
`;

export const Bpmdiv = styled.span `
    top: 10px;
    left: 10px;
    position: absolute;
    z-index: 10;
    opacity: 0.9;
    font-size : 12px;
    transition: opacity 0.1s linear;
`;


export const Vocaldiv = styled.span `
    bottom: 10px;
    right: 10px;
    position: absolute;
    z-index: 10;
    opacity: 0.9;
    font-size : 12px;
    transition: opacity 0.1s linear;
`;

export const Durationdiv = styled.span `
    top: 10px;
    right: 10px;
    position: absolute;
    z-index: 10;
    opacity: 0.9;
    font-size : 12px;
    transition: opacity 0.1s linear;
`;

export const Genrediv = styled.span `
    opacity:1;
`;


// ./src/component/Thumbnail/Circle.js
export const FirstCircle = styled.div `
  position: absolute;
  z-index: 10;
  top: 0px;
`;

// ./src/component/surveys/tutorial/index.js

export const MarginDiv = styled.div `
    display: block;
    padding : 0px 0px 80px 0px;
    margin : 0px 0px 50px 0px;
    border-bottom: 1px solid rgba(255,255,255,0.5);
`
export const Gridtwo = styled.div `
    columns: 3 auto;
`;


export const Middleinput = styled.input `
    width: 150px;
    display: flex;
    border: 0;
    border-bottom: 2px solid rgba(15,15,15,1);
    outline: 0;
    font-size: 18px;
    color: rgba(15,15,15,1);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    text-align: center; 
    &:disabled {
        border-bottom: 2px solid red;
    }
`
export const WordSimGrid = styled.div `
    width : 60%;
    display: flex;
    flex-direction : row;
    align-items: center;
    justify-content : space-around;

`;



export const WordPair = styled.div`
    font-weight : bold;
    font-size : 18px;
    text-align: left;
    margin-right : 20px;
`;