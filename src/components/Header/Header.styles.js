import styled from 'styled-components';

export const HeaderStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 1px solid #e6e6e6;
    height: 45vh;
    background-image: url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700542388.jpg');
    background-size: cover;
    background-position: center;
    .logo-container {
        width: fit-content;
        padding-left: 25px;
        p{
            color: black;
            font-family:'Times New Roman', Times, serif;
            border-radius: 100px;
            background-color: #84cabf;
            padding: 2rem;
        }
        a{
            text-decoration: none;
            font-size: 1.5rem;
        }
    }
    .social-container{
        display: flex;
        justify-content: right;
        gap: 15px;
        padding: 25px;
        img{
            height: 20px;
        }
    }
    .login-container{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
    }
    @media screen and (max-width: 440px){
        height: 20vh;
        .logo-container {
            padding-left: 15px;
            p{
                padding: 1rem;
            }
            a{
                font-size: 1rem;
            }
        } 
    }
`;
