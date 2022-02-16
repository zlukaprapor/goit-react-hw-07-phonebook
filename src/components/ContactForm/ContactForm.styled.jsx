import styled from 'styled-components';

export const Form = styled.form`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid #000000;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: left;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 4px;
  // transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  ::placeholder {
    color: #afafaf;
  }
  &:focus {
    outline: transparent;
    border: 2px solid #9c0b3c;
  }
`;

export const Button = styled.button`
  width: 150px;
  margin: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 2px solid #000000;
  font-size: 16px;
  text-transform: capitalize;
  color: #000000;
  box-shadow: 1px 1px 1px 1px #9c0b3c;
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
