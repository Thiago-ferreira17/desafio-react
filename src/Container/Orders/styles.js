import styled from "styled-components";


export const Containner = styled.div`
  background: #0a0a10;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  min-height: 100vh; 
`;

export const Image = styled.img`
  margin-top: 30px;
`;


export const ContainnerItens = styled.div`
  flex: 1; 
  padding: 20px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px; 
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