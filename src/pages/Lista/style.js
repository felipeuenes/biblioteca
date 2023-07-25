import styled from "styled-components";


export const Container = styled.div`

    width: 80%;
    margin: 0 auto;
    font-size: 1.6rem;
    margin-top: 3.0rem;
    
    article{
        display: flex;
        gap: 15.0rem;
    }
    article input{
        width: 30.0rem;
    }
    .searchIcon{
        position: absolute;
        left: 50%;
    }
    h1{
        text-align: center;
        margin-bottom: 2.4rem;
    }


    .modal-content{
        width: 90%;
    }

    #cadastro{
        border: none;
        padding: 0.8rem;
        margin-bottom: 1.6rem;
        border-radius: 0.6rem;
        background-color: green;
        color: white;
    }
    #cadastro:hover{
        background-color: #005500;
    }

    #inputSearchStudents{
        padding: 0.5rem;
        border-radius: 0.8rem;
    }

    .inputSection{
        display: flex;
        gap: 1.6rem;
        justify-content: center;
        align-items: center;
    }

`;