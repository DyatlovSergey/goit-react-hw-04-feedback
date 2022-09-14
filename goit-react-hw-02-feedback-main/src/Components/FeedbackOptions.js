import React from "react";
import s from "./FeedbackForm.module.css";

const FeedbackOptions = ({ options, onHandleClick }) => (
  <ul className={s.buttonList}>
    {options.map((option) => (
      <li className={s.buttonBox} key={option}>
        <button
          className={s.button}
          type="button"
          name={option}
          onClick={() => onHandleClick(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
