import styled from 'styled-components';

export const PokemonStyles = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .search-container{
        background-color: white;
        padding: 35px;
        form{
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
        margin: 25px;
        a{
            text-decoration: none;
            color: black;
        }
    }
    .favorite-pokemons-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e5eaeb;
        margin-bottom: 25px; 
        .favorites-container{
            padding: 25px;
            display: grid;
            grid-template-columns: repeat( 7, 1fr );
            justify-content: center;
            grid-gap: 20px;
            .favorites-card{
                background-color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 20px;
                box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
                img{
                    width: fit-content;
                }
                h6{
                    margin: 10px;
                }
                .delete-favorites-container{
                    border-top: 1px solid gray;
                    color: gray;
                    display: flex;
                    justify-content: center;
                    border-top: 1px solid gray;
                    width: 100%;
                    padding: 5px 0px;
                    button{
                        color: gray;
                    }
                }
                
            }
        }
    }
    .cards-container{
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
    .addTo-favorites-container{
        display: flex;
        justify-content: center;
        gap: 10px;
        border-top: 1px solid gray;
        width: 100%;
        padding: 15px 0px;
        color: gray;
    }
    .addTo-favorites-button{
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
    @media screen and (max-width: 440px){
        .cards-container{
            display: grid;
            grid-template-columns: repeat( 2, 1fr );
        }
        .card{
            width: 150px;
            a{
                font-size: small;
            }
        }
        label{
            display: none;
        }
        .favorite-pokemons-section{
            display: wrap;
            .favorites-container{
                display: grid;
                grid-template-columns: repeat( 3, 1fr );
                .favorites-card{
                    padding: 20px 0px;
                    width: 80px;
                    height: 80px;
                    h6{
                    margin: 0px;
                    font-size: 0.5rem;
                    }
                    img{
                        margin: 0px;
                        width: 90%;
                    }
                }
            }
     }
    }
   
`;
