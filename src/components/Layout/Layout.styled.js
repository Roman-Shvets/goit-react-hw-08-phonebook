import styled from 'styled-components';

export const LayoutStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 30px 0;
`;
export const PhonebookApp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
  padding: 50px 30px;
  max-width: 600px;
  font-size: 40;
  color: #010101;
  border-radius: 10px;
  box-shadow: 0px 0px 28px 10px rgba(0, 0, 0, 0.8);
`;