import React from "react";
import styles from "./Button.module.css";

function Button({ style, content, show = true }) {
  return <button className={`${styles[style]} ${show ? '' : styles.visible}`}>{content}</button>;
}

export default Button;
