import PropTypes from 'prop-types';

import s from './styles.module.css';

const FeedbackOptions = ({options, onSetFeedback}) => {
  const elements = options.map(item => <button key={item} onClick={() => onSetFeedback(item)}>{item}</button>)
    return (
      <div className={s.items}>
    {elements}
      </div>
    );
  }

export default FeedbackOptions;

PropTypes.propTypes = {
  onSetFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
