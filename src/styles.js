import styled from "styled-components";

export const Containner = styled.div`
  background: #0a0a10;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
export const Image = styled.img`
  margin-top: 30px;
`;
export const H1 = styled.h1`
  color: #ffffff;
  size: 28px;

  font-size: 28px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0px;
  text-align: center;
`;

export const ContainnerItens = styled.div`
  padding: 20px 36px;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.p`
  color: #eeeeee;

  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  padding-left: 22px;
`;
export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding: 19px, 139px, 18px, 15px;
  margin-bottom: 30px;
  padding-left: 21px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  gap: 18px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: none;
  outline: none;

  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin-top: 100px;
  gap: 14px;

  background: #d93856;
  border: none;

  font-size: 17px;
  font-weight: 900;
  line-height: 3px;
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

export const Order = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  

  width: 342px;
  height: 100px;
  padding: 19px, 139px, 18px, 15px;
  margin-bottom: 30px;
  padding-left: 9px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  gap: 15px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: none;
  outline: none;
  margin-top: 20px;

  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;

  p {
    width: 219px;
    height: 42px;
    top: 17px;
    left: 27px;
  }
  button {
    
    margin-right: 43px;
    background: none;
    border: none;
    cursor: pointer;
  }
  
`;
export const ClientName = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;
