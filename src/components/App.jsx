import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics';
import { Wrapper } from './App.styled';

class App extends Component {
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
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? (this.state.good / total) * 100 : 0;
  };
  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
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
          TotalFeedback={total}
          PositiveFeedbackPercentage={positive}
        />
      </Wrapper>
    );
  }
}

// Counter.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   TotalFeedback: PropTypes.number.isRequired,

// };
// export default Counter;
export default App;
