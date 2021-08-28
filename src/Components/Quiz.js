import React, { useState } from 'react';
import "./Quiz.css";
import { useHistory } from "react-router-dom";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useSelector, useDispatch } from "react-redux";
import { Questions } from "../QuestionBank";
import { nextQuestion, prevQuestion, setAnswer } from "../actions/index";



function Quiz() {
    const myState = useSelector((state) => state.reducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const [timer, setTimer] = useState(20);

    const sec = Math.floor(timer % 60) //set seconds
    const min = Math.floor(timer / 60) //set minutes
    const clock = `${min}:${sec > 9 ? sec : '0' + sec}` //create 'clock'

    const startTimer =  //now start the 'timer'
        timer > -1 ?
            setTimeout(() => {
                setTimer(timer - 1);
                setTimer(clock);
            }, 1000) : "done";

    if (timer === 0 && min === 0 && sec === 0) {
        alert("Quiz has been ended!");
        history.push("/score");
    }

    if (timer && min === 0 && sec === 0) {
        min -= 1
        sec += 59
    }


    const selectedOption = (e) => {
        e.preventDefault();
        for (let i = 0; i < myState.answerInfo.length; i++) {
            if (myState.selectedQuestion == myState.answerInfo[i].id) {
                myState.answerInfo.splice(i, 1);
            }
        }
        const addAns = {
            id: myState.selectedQuestion,
            selectedAns: e.target.innerHTML
        }
        dispatch(setAnswer(addAns));
    }

    for (let i = 0; i < myState.answerInfo.length; i++) {
        if (myState.selectedQuestion == myState.answerInfo[i].id) {
            var answer = myState.answerInfo[i].selectedAns
        }
    }

    const onclickQuit = () => {
        myState.answerInfo.splice(0, myState.answerInfo.length);
        myState.selectedQuestion = 0;
        history.push("/");
    }

    const iconStyle = {
        color: "red",
        fontSize: "18px",
    }


    return (
        <div className="quizzz">
            <div className="quiz">
                <h1>Hello {myState.Users[0].name}, Quiz Started</h1>
                <div className="quiz_feature">
                    <p className="left">{myState.selectedQuestion + 1} of 5</p>
                    <p className="right">{timer}<AccessTimeIcon style={iconStyle} /></p>
                </div>
                <div className="question">
                    <h3>{Questions[myState.selectedQuestion].question}</h3>
                    <div className="options">
                        <p onClick={selectedOption} style={Questions[myState.selectedQuestion].optionA == answer ? { backgroundColor: "green" } : { backgroundColor: "" }}>{Questions[myState.selectedQuestion].optionA}</p>
                        <p onClick={selectedOption} style={Questions[myState.selectedQuestion].optionB == answer ? { backgroundColor: "green" } : { backgroundColor: "" }}>{Questions[myState.selectedQuestion].optionB}</p>
                    </div>

                    <div className="options">
                        <p onClick={selectedOption} style={Questions[myState.selectedQuestion].optionC == answer ? { backgroundColor: "green" } : { backgroundColor: "" }}>{Questions[myState.selectedQuestion].optionC}</p>
                        <p onClick={selectedOption} style={Questions[myState.selectedQuestion].optionD == answer ? { backgroundColor: "green" } : { backgroundColor: "" }}>{Questions[myState.selectedQuestion].optionD}</p>
                    </div>

                    <div className="Quiz_buttons">
                        {myState.selectedQuestion == 0 ? (
                            <button style={{ visibility: "hidden" }}>Previous</button>
                        ) : (
                            <button onClick={() => dispatch(prevQuestion())}>Previous</button>
                        )}

                        {myState.selectedQuestion == Questions.length - 1 ? (
                            <button onClick={() => history.push("/score")}>Finish</button>
                        ) : (
                            <button onClick={() => dispatch(nextQuestion())}>Next</button>
                        )}

                        <button onClick={onclickQuit}>Quit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz;
