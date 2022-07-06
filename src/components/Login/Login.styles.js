import styled from 'styled-components';

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2, h3{
   color: gray;
  }
  form{
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 25px;
    margin: 25px;
    gap: 15px;
    border-radius: 10px;
    color: gray;
    border: solid 1px gray;
    input{
      padding: 10px;
      width: 300px;
    }
    button{
      background-color: #84cabf;
      border: none;
      border-radius: 5px;
      padding: 10px;
      width: 322px;
      margin-top: 20px ;
      cursor: pointer;
      &:hover{
          background-color: #a8d9d2;
      }
   }
 }
 .form-container{
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-color: #eeeff0;
  margin: 25px;
  padding: 35px;
 }
 .login-message{
  background-color: #e5e5e5;
  border-bottom: 1px solid #676767;
  border-top: 1px solid #676767;
  width: 100%;
  color: gray;
 }
 .register-acces{
  padding: 15px;
  a{
    color: red;
    text-decoration: none;
  }
 }
 @media screen and (max-width: 440px){
  h2, h3{
   font-size: small;
  }
  form{
    padding: 10px;
    margin: 20px;
    gap: 10px;
    input{
      padding: 10px;
      width: 250px;
    }
    button{
      padding: 10px;
      width: 272px;
   }
 }
 .form-container{
  padding: 25px;
 }
 }
`;
