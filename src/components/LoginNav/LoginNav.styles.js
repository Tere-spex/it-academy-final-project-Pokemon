import styled from 'styled-components';

export const LoginNavStyle = styled.div`
    display: flex;
    justify-content: right;
    background-color: #e5e5e5;
    width: 100%;
    border-top: 1px solid #676767;
    border-bottom: 1px solid #676767;
    position: sticky;
    top: 0px;
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: 15px;
        margin-right: 10px;
            li{
                text-align: center;
                a{
                text-decoration: none;
                color: gray;
                font-weight: bold;
                    &:hover{
                        color: #006257;
                    }
                }
            }
        }
`;
