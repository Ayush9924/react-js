import React from "react";
import styles from "./Buttom.module.css"; // CSS Module

function Car(props) {
  return (
    <>
      <h1 className={styles.title}>
        This is my Car Component
        My car color is {props.color} {props.brands} {props.model}
      </h1>

      <button className={styles.btn}>dono</button>
    </>
  );
}

export default Car;
