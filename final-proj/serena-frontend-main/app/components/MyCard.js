"use client";
import { useEffect, useState } from "react";
import classes from "./my-card-styles.module.css";

function MyCard(props) {
  const [numClicks, setNumClicks] = useState(0);
  const [message, setMessage] = useState(""); // State to store messages

  useEffect(() => {
    if (numClicks >= 10) {
      setMessage("We have clicked more than 10 times!"); // Update message
    } else {
      setMessage(""); // Clear message if below 10 clicks
    }
  }, [numClicks]);

  useEffect(()=> {
    if (numClicks >= 20) {
      setMessage("STOP CLICKING");
    }
  }, [numClicks]);

  useEffect(() => {
    if (numClicks >= 30) {
      alert("You have reached your maximum number of clicks. Resetting...")
      setNumClicks(0);
    }
  }, [numClicks]);

  function incrementNumClicks() {
    setNumClicks(numClicks + 1);
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.text}>{props.text}</p>
      <button onClick={incrementNumClicks}>{props.buttonText}</button>
      <p>
        You clicked the button{" "}
        <span className={classes.counter}>{numClicks}</span> times!
      </p>
      {message && <p className={classes.message}>{message}</p>} {/* Display the message */}
    </div>
  );
}

export default MyCard;
