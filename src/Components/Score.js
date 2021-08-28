import React, { useState, useEffect } from 'react';
import "./Score.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Questions } from "../QuestionBank";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


function Score() {
    const myState = useSelector((state) => state.reducer);
    const dispatch = useDispatch();
    var yourScore = 0;

    const iconStyle = {
        color: "green",
        fontSize: "80px",
        zIndex: "2px"
    }

    for (let j = 0; j < Questions.length; j++) {
        for (let i = 0; i < myState.answerInfo.length; i++) {
            if (Questions[j].answer == myState.answerInfo[i].selectedAns && Questions[j].id == myState.answerInfo[i].id + 1) {
                yourScore += 1;
            }
        }
    }

    const onClick = (e) => {
        e.preventDefault();
        myState.Users[myState.Users.length - 1].score = yourScore;

    }

    const onclickClose = () => {
        myState.answerInfo.splice(0, myState.answerInfo.length);
        myState.selectedQuestion = 0;
    }

    return (
        <div className="score">
            <div className="score__details">
                <div className="icon">
                    <CheckCircleIcon style={iconStyle} />
                </div>
                <div className="score__Container">
                    <h2>Congratulations!!</h2>
                    <h1>Your Score: {(yourScore / Questions.length) * 100}%</h1>
                    <p>Correct Questions: {yourScore}</p>
                </div>
                <div className="buttons">
                    <Link to="/">
                        <button onClick={onclickClose} className="score__btn first">Close</button>
                    </Link>
                    <Link to="/start">
                        <button onClick={onclickClose} className="score__btn second">Play Again</button>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Score;
