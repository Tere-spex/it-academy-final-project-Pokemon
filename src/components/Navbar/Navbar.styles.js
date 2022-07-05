import styled from 'styled-components';

export const NavbarStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e5e5e5;
    border: 1px solid #676767;
    margin: auto;
    padding: 0rem 0.5rem;
    position: sticky;
    top: 0px;
        ul{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: 15px;
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
button{
    background-color: #a8d9d2;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    width: 120px;
    font-weight: bold;
    color: gray;
    cursor: pointer;
    &:hover{
        background-color: #006257;
        color: white;
    }
}
`;
