"use client";
import { useState } from "react";
import styles from './my-form-styles.module.css'; 

function MyForm() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hi, ${name}! Nice to meet you!`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome!</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">Your Name:</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className={styles.button} type="submit">Submit</button>
      </form>
      {greeting && <p className={styles.greeting}>{greeting}</p>}
    </div>
  );
}

export default MyForm;
