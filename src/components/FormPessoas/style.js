import styled from "styled-components";



export const Container = styled.div`


    width: 100%;
    text-align: left;
    

    .form-select{
        font-size: 1.6rem;
        text-align: left;
    }
    label{
        width: 20.0rem;
        text-align: left;
        font-size: 1.6rem;
    }
    #linha{
        
        width: 50%;
        gap: 2.4rem;

    }
    select{
        width: 60%;
    }

    input{
        width: 25.0rem;
        font-size: 1.6rem;
    }
    section{
        display: flex;
        flex-direction: column;
    }
    .btreserva button{
        font-size: 1.6rem;
        margin: 1.6rem;
        border: none;
        padding: .6rem;
        background-color: green;
        color: white;
        border-radius: 0.6rem;

    }

    .btreserva button:hover{
        background-color: #005500;
    }

`;