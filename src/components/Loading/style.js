import styled from "styled-components";


export const Container = styled.div`
 

    filter: invert(100%);

    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 20;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(100, 100, 100, 0.5);

    img{
        width: 25.0rem;
        position: absolute;
    }
`;