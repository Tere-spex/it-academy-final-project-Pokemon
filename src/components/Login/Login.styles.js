import styled from 'styled-components';

export const LoginStyle = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 form{
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    margin: 25px;
    gap: 15px;
    border-radius: 10px;
    color: gray;
    border: solid 1px gray;
    input{
      padding: 5px;
    }
    button{
      background-color: #84cabf;
      border: none;
      border-radius: 5px;
      padding: 10px;
      width: 120px;
      cursor: pointer;
      &:hover{
          background-color: #a8d9d2;
      }
   }
 }
`;
