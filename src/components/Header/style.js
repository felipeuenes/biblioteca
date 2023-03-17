import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    background-color: green;
    height: 8.0rem;
    display: flex;


    .menuIcon{
        font-size: 5.4rem;
        color: white;
        cursor: pointer;
        margin-left: 2.0rem;
        position: relative;
        z-index: 3;
    }
    button{
        border: none;
        background-color: #80808008;
    }


    #logo{
        width: 15.0rem;
        margin: 0 auto;
    }

    #logo img{
        width: 15.0rem;
        margin-top: 1.5rem;
        margin-left: -5.0rem;
    }
`;