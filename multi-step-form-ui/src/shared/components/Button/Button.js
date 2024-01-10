import React from "react";
import styles from "./Button.module.css";

function Button({ style, content, show = false, handler = null }) {
  return <button className={`${styles[style]} ${show ? styles.visible : ''}`} onClick={handler}>{content}</button>;
}

export default Button;
