import styled from 'styled-components'


export const Container = styled.div`

   background: #000c;
   width: 100%;
   padding: 2.4rem;
   height: 100%;
   position: absolute;
   left: 0;
   top: 0;

   z-index: 2;
   display: grid;
   place-content: center;

   ul{
        list-style: none;
        font-size: 2.6rem;
        text-align: center;

        display: grid;
        gap: 4.8rem;
        
    }



    a{
        color: white;
        text-decoration: none;
    }
    a:hover{
        color: #888;
    }





`;