import styled from "styled-components";


export const Container = styled.div`


    width: 40.0rem;
    margin: 1.6rem;
    padding: 3.2rem;
    border: .1rem solid black;
    border-radius: .8rem;
    


    section{
        display: flex;
        flex-direction: column;
        margin-top: 1.6rem;
    }
    input{
        width: 100%;
    }
    label{
        font-size: 1.6rem;
        padding: .4rem;
    }
    .erro{
        color: red;
        font-size: 1.3rem;
        position: absolute;
        margin-top: 4.8rem;
    }

    button{
        margin-top: 2.6rem;
        width: 100%;
        background-color: green;
        border:none;
        color: white;
        padding: 0.5rem;
        cursor: pointer;


    }
    button:hover{
        background-color: #005500;
    }

`;