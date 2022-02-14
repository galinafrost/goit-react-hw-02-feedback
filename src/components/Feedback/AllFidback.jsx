import { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics'

import s from './feedback.module.scc';

class AllFidback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

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
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivFeedback = good;

    let sum = 0;

    if (positivFeedback !== '') {
      sum = (positivFeedback * 100) / total;
    }

    return Math.round(sum);
  }

  render() {
    const { setFeedback } = this;
    const { good, neutral } = this.state;
    const result = this.countTotalFeedback();
    const positiv = this.countPositiveFeedbackPercentage();
    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackOptions onSetFeedback={setFeedback}/>
        {result > 0 ? ( 
          <>
        <h2>Statistics</h2>
        <div>
          <Statistics good={good} neutral={neutral} bad={this.state.bad} positivePercentage={positiv} result={this.countTotalFeedback()}/>
        </div>
        </>) : (<div>
          <p>No feedback given</p>
        </div>)}
      </>
    );
  }
}

export default AllFidback;

