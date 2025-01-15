"use client";
import styles from "../signup/signup.module.css"
export default function signup() {
  return (
    <>
      <form className={styles.container}>
        <div className={styles.signupbox}>
          <h1>SignUp</h1>
          <div className={styles.inputbox}>
            <input type="text" placeholder="username" />
          </div>
          <div className={styles.inputbox}>
            <input type="email" placeholder="email" />  
          </div>
          <div className={styles.inputbox}>
            <input type="number" placeholder="phone number" />
          </div>
          <div className={styles.inputbox}>
            <input type="password" placeholder="password" />
          </div>

          <button type="submit" className={styles.btn}>
            signup
          </button>
       
        </div>
      </form>
    </>
  );
}
