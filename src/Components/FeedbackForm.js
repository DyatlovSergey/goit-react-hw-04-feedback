import React from "react";
import s from "./FeedbackForm.module.css";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

import { useState } from "react";

const FeedbackForm = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (button) => {
    switch (button) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  // class FeedbackForm extends React.Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };

  //   handleClick = (button) => {
  //     this.setState({ [button]: this.state[button] + 1 });
  //   };
  //
  // totalFeedback = () => {
  //   const { good, bad, neutral } = this.state;
  //   return good + neutral + bad;
  // };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  // positiveFeedback = () => {
  //   const { good } = this.state;
  //   if (!good) {
  //     return 0;
  //   }
  //   return ((good * 100) / this.totalFeedback()).toFixed(0);
  // };

  const positiveFeedback = () => {
    if (!good) {
      return 0;
    }

    return ((good * 100) / totalFeedback()).toFixed(0);
  };

  // render() {
  //   const { good, neutral, bad } = this.state;

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onHandleClick={handleClick}
        />
      </Section>

      {totalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            options={{ good, neutral, bad }}
            totalFeedback={totalFeedback()}
            positiveFeedback={positiveFeedback()}
          />
        </Section>
      )}
    </div>
  );
  // }
  // }
};
export default FeedbackForm;
