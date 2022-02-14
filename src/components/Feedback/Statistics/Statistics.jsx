import PropTypes from 'prop-types';

import s from './styles.module.css';

const Statistics = props => {
  console.log(props);
  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {props.result}</p>
      <p>Positiv feedback: {props.positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    result: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
