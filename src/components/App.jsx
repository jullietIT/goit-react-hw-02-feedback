import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics';
import Notification from './NotificationMessage/NotificationMessage';
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
  // вспомогательные методы
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // вспомогательные методы
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

        {total > 0 ? (
          <Statistics
            {...this.state}
            TotalFeedback={total}
            PositiveFeedbackPercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Wrapper>
    );
  }
}

export default App;
