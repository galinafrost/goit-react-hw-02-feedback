import { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

import s from './feedback.module.scc';

class AllFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  static btnOptions = ["good", "neutral", "bad"]

  setFeedback = property => {
    console.log(property);
    this.setState(prevState => {
      const value = prevState[property];

      return {
        [property]: value + 1,
      };
    });
  };

  countTotalFeedback() {
    const total = Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);

    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
  
    let sum = 0;

    if (good !== '') {
      sum = (good * 100) / this.countTotalFeedback();
    }

    return Math.round(sum);
  }

  render() {
    const { setFeedback } = this;
    const { good, neutral, bad } = this.state;
    const result = this.countTotalFeedback();
    const positiv = this.countPositiveFeedbackPercentage();
    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={AllFeedback.btnOptions} onSetFeedback={setFeedback}/>
        {result > 0 ? ( 
          <>
        <h2>Statistics</h2>
        <div>
          <Statistics good={good} neutral={neutral} bad={bad} positivePercentage={positiv} result={this.countTotalFeedback()}/>
        </div>
        </>) : <Notification />}
      </>
    );
  }
}

export default AllFeedback;

