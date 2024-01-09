import React from "react";
import styles from "./Button.module.css";

function Button({ style, content }) {
  return <button className={styles[style]}>{content}</button>;
}

export default Button;
