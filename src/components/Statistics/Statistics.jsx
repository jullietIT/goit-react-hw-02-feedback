import React from 'react';
import { Title, BlockNumber } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  TotalFeedback,
  PositiveFeedbackPercentage,
}) => (
  <div>
    <Title>Statistics</Title>
    <BlockNumber>
      <p> Good:{good} </p>
      <p> Neutral: {neutral}</p>
      <p> Bad:{bad}</p>
      <p> Total:{TotalFeedback} </p>
      <p> Positive feedback:{PositiveFeedbackPercentage}% </p>
    </BlockNumber>
  </div>
);
export default Statistics;
