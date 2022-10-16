import styled from 'styled-components';

export const Title = styled.h2`
  justify-content: center;
  margin-bottom: 20px;
  font-size: 32px;

  display: flex;
`;

export const BlockButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 8px;
  min-width: 120px;
  padding: 8px 16px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 6px;
  text-transform: capitalize;
  cursor: pointer;
`;

export const BlockNumber = styled.div`
  display: block;
  text-align: center;
`;
