'use client';

import { useState } from "react";
import classes from "./serena-form-styles.module.css";

function SerenaForm({ onStudentAdded }) {
  const [firstName, setFirstName] = useState("");
  const [favFood, setFavFood] = useState("");
  const [sisters, setSisters] = useState([]);
  const [favColor, setFavColor] = useState("");
  const [age, setAge] = useState("");
  const [isAwesome, setIsAwesome] = useState("");
  const [height, setHeight] = useState("");

  async function onSubmit() {
    const newSerenaData = {
      firstName,
      favFood,
      sisters,
      favColor,
      age,
      isAwesome,
      height,
    };

    try {
      const res = await fetch("http://localhost:8080/serenadata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSerenaData),
      });

      if (res.ok) {
        onSerenaDataAdded(); 
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }

  return (
    <div>
      <h3>Add New Data</h3>
      <button onClick={onSubmit}>Submit</button>
      <h4>Main Info</h4>
      <div className={classes.mainForm}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
            <label htmlFor="favFood">Favorite Food: </label>
            <input
                name="favFood"
                value={favFood}
                onChange={(event) => setFavFood(event.target.value)}
                />
        </div>
        <div>
            <label htmlFor="sisters">Sisters: </label>
            <input
                name="sisters"
                value={sisters}
                onChange={(event) => setSisters(event.target.value)}
                />
        </div>
        <div>
            <label htmlFor="favColor">Favorite Color: </label>
            <input
                name="favColor"
                value={favColor}
                onChange={(event) => setFavColor(event.target.value)}
                />
        </div>
        <div>
            <label htmlFor="age">Age: </label>
            <input
                name="age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                />
        </div>
        <div>
            <label htmlFor="isAwesome">Is awesome: </label>
            <input
                name="isAwesome"
                value={isAwesome}
                onChange={(event) => setIsAwesome(event.target.value)}
                />
        </div>
        <div>
            <label htmlFor="height">Height: </label>
            <input
                name="height"
                value={height}
                onChange={(event) => setAge(event.target.value)}
                />
        </div>

      </div>
    </div>
  );
}

export default SerenaForm;
