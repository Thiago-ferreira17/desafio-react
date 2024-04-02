import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin-top: 100px;
  gap: 14px;

  background: ${props => props.isBack ? '#ffffff24' : '#d93856'} ;
  border: none;

  font-size: 17px;
  font-weight: 900;
  line-height: 60px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

`;
