import styled from "styled-components";

export const Card = styled.li`
   display: flex;

   cursor: pointer;
 
   max-width: 240px;
   height: 146px;
   
   color: #fff;
   background-color: #191818;
   
   border-radius: 8px;

   transition: 0.5s;
   
   &:hover{
    background-color: rgba(25, 24, 24, 0.7);
       
    transition: 0.5s;
   }

   figure{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    }

   div{
    margin: 29px 0 35px 31px ;
    display: flex;
    flex-direction: column;
    gap: 8px;
   }

   h2{
    font-size: 12px;
   }
   svg{
    color: white;
    width: 32px;
    height: 32px;

    @media (width > 768px){
        &{
            display: none;
        }
    }
   }

   img{
    width: 63px;
    height: 63px;

    border-radius: 50%;
   }
`