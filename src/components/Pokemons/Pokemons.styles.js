import styled from 'styled-components';

export const PokemonStyles = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .search-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        padding: 25px; 
        gap: 25px; 
        .search{
            background-color: white;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid gray;
            label{
            color: gray;
            background-color: white;
            padding: 5px;
            font-size: 0.8rem;
            }
            input{
                color: gray;
                background-color: white;
                padding: 5px;
                border: none;
                font-size: 0.9rem;
            }
        }
    }
    .search-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        border: 2px solid black;
        box-shadow: 5px 5px 55px rgba(25,225,225,0.5);
        transition: 0.3s;
        width: 250px;
        background-color: #fbfdfd;
        cursor: pointer;
        a{
            text-decoration: none;
            color: black;
        }
    }
    /* .searching-pokemon{
   
    } */
    .cards-container{
        padding: 25px;
        display: grid;
        grid-template-columns: repeat( 4, 1fr );
        justify-content: center;
        grid-gap: 20px;
    }
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
        transition: 0.3s;
        width: 200px;
        a{
            text-decoration: none;
            color: black;
        }
    }
    .favorites-container{
        display: flex;
        justify-content: center;
        gap: 25px;
        border-top: 1px solid gray;
        width: 100%;
        padding: 15px 0px;
        color: gray;
    }
    .favorites-button{
        background-color: transparent;
        border: none;
        color: red;
        border: 1px solid gray;
        border-radius: 20px;
        cursor: pointer;
        &:hover{
            /* box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75); */
            transform: scale(1.09);
        }
    }
    .pagination{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px 0px;
        grid-column: 1/3;
        gap: 25px;
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
            a{
                text-decoration: none;
                font-weight: bold;
                color: white;
                }
        }
    }
`;
