import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './styles.module.css';

class FeedbackOptions extends Component {
  render() {
    const { onSetFeedback } = this.props;
    return (
      <div className={s.items}>
        <button onClick={() => onSetFeedback('good')}>Good</button>
        <button onClick={() => onSetFeedback('neutral')}>Neutral</button>
        <button onClick={() => onSetFeedback('bad')}>Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;

PropTypes.propTypes = {
  onSetFeedback: PropTypes.func.isRequired,
};
