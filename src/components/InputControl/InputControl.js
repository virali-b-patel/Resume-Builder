import React from "react";
import styles from "./InputControl.module.css";
import { Label } from "@material-ui/icons";

function InputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
      {Label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
