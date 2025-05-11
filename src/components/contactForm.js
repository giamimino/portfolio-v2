'use client'

import { useState } from 'react';
import styles from '../styles/contact.module.scss'

const ContactC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    console.log(error);
    

    if (success) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <main className={styles.contactWrapper}>
      <form className={styles.contact} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">_name:</label>
          <input 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          type="text" id="name" placeholder="John Doe" name="name" required/>
        </div>

        <div>
          <label htmlFor="email">_email:</label>
          <input 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          type="email" id="email" placeholder="john@gmail.com" name="email" required/>
        </div>

        <div>
          <label htmlFor="message">_message</label>
          <textarea
          onChange={(e) => setMessage(e.target.value)} 
          value={message} 
          type="text" cols="30" rows="8" placeholder="your message here ..." id="message"  name="message"></textarea>
          
        </div>

        <button type="submit">submit_message</button>
        <div>
          {error &&
            error.map((e, key) => (
              <div key={key} className={styles[success ? "success" : "error"]}>
                {e}
              </div>
            ))}
        </div>
      </form>
    </main>
  )
}

export default ContactC;