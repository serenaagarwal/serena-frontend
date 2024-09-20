"use client";
import { useEffect, useState } from "react";
import classes from "./my-card-styles.modules.css";

function MyCard(props) {
    const [buttonCount, setButtonCount] = useState(0);
    useEffect(()=> {
        if (buttonCount == 10) {
            alert("TOO MANY BUTTON CLICKS");
        }
    }, [buttonCount]);
    const [myName, setMyName] = useState('');
    function increaseCount() {
        setButtonCount(buttonCount + 1)
       
    }
    function addLetter() {
        setMyName(myName + "a")
    }
    return <div className={classes.container}>
        <h2 >{props.heading}</h2>
        <p>{props.paragraph}</p>
        <button
        onClick = {increaseCount}
        >{props.buttontext}</button>
        <button
        onClick={addLetter}>
        Add a letter to your name!
        </button>
        <p>You clicked the button <span>className = {classes.count}{buttonCount}</span>times!</p>
        <p>Hi, {myName}!</p>
        
        </div>;
}

export default MyCard;