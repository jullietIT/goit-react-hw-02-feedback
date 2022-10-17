import React from 'react';
import { Wrapper } from './Counter.styled.js';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../Statistics/Statistics';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      TotalFeedback: prevState.bad + prevState.neutral + prevState.good,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      PositiveFeedbackPercentage: Math.round(
        this.TotalFeedback ? (this.state.good / this.TotalFeedback) * 100 : 0
      ),
    }));
  };

  render() {
    return (
      <Wrapper>
        <FeedbackOptions
          onClickGood={this.handleIncrementGood}
          onClickNeutral={this.handleIncrementNeutral}
          onClickBad={this.handleIncrementBad}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          TotalFeedback={this.state.TotalFeedback}
          PositiveFeedbackPercentage={this.state.PositiveFeedbackPercentage}
        />
      </Wrapper>
    );
  }
}
export default Counter;

// Profile. propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   };
