"use client";
import { useState } from "react";
import styles from "../login/page.module.css";

export default function login() {
  const [loginData,setLoginData] = useState({
    username:"",
    password:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setLoginData({
      ...loginData,
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  }


  return (
    <>
      <form className={styles.container}>
        <div className={styles.loginbox}>
          <h1>login</h1>
          <div className={styles.inputbox}>
            <input type="text" placeholder="username" />
          </div>

          <div className={styles.inputbox}>
            <input type="password" placeholder="password" />
          </div>

          <div className={styles.password}>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className={styles.btn}>
            login
          </button>

          <div className={styles.register}>
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
