import styled from 'styled-components';

export const Item = styled.li`
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`;

export const Name = styled.span`
  margin-right: 15px;
  font-weight: bold;
`;

export const Number = styled.a`
  margin-right: 15px;
  text-decoration: none;
  color: #000000;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 70px;
  margin: 5px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #000000;
  font-size: 12px;
  text-transform: capitalize;
  color: #000000;
  background-color: #d6cbcb;
  // box-shadow: 1px 1px 1px 1px #9c0b3c;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover {
    transform: scale(0.95);
    background-color: #000000;
    border-color: #9c0b3c;
    color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) inset;
    transition: all 250ms linear;
  }
`;
