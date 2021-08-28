import React, {useState, useEffect} from 'react';
import "./FirstPage.css";
import logo from "./quiz-logo2.jpg";
import backg1 from "./Background3.jpg";
import {Link, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {addUser} from "../actions/index";


function FirstPage() {
    const myState = useSelector((state) => state.reducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const onClick= (e) =>{
        e.preventDefault();
        const newUser = {
            id: myState.Users.length,
            name: name,
            score:0,
        }
        dispatch(addUser(newUser));
        history.push("/start");
    }


    return (
        <div className="firstPage">
            <img className="first_backImg" src={backg1} />
            <img className="first_logo" src={logo} alt="" />
            <div className="firstPage_container">
               <h1>Quizzy Buzzers</h1>
               
                 <input 
                   required
                   autoFocus
                   onChange={(e) => setName(e.target.value)} 
                   type="text" 
                   value={name} 
                   placeholder="Enter Your Name" 
                   name="name"
                  />
                   
                  <Link to="/start">
                     <button className="first_button" onClick={onClick}>Start Quiz</button>
                 </Link>
                  
            </div>
        </div>
    )
}

export default FirstPage;

