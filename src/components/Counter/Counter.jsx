import React from 'react';
import {
  Wrapper,
  Button,
  Title,
  BlockButton,
  BlockNumber,
} from './Counter.styled.js';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // value: this.props.initialValue,
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

  render() {
    return (
      <Wrapper>
        <Title>Please leave feedback</Title>
        <BlockButton>
          <Button type="button" onClick={this.handleIncrementGood}>
            Good
          </Button>
          <Button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </Button>
          <Button type="button" onClick={this.handleIncrementBad}>
            Bad
          </Button>
        </BlockButton>
        <Title>Statistics</Title>
        <BlockNumber>
          <p> Good: </p>
          <span>{this.state.good}</span>
          <p> Neutral: </p>
          <span>{this.state.neutral}</span>
          <p> Bad:</p>
          <span>{this.state.bad}</span>
          <p> Total: </p>
          <span>{this.state.bad + this.state.neutral + this.state.good}</span>
          <p> Positive feedback: </p>
          <span>
            {(100 / (this.state.bad + this.state.neutral + this.state.good)) *
              this.state.good}
            %
          </span>
        </BlockNumber>
      </Wrapper>
    );
  }
}
export default Counter;
