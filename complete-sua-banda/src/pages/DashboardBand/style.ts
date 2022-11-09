import styled from "styled-components"

export const ContainerUl = styled.ul`
    background-color: #4C4948;
    overflow: auto;
    height: 100vh;

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px 96px;

        max-width: 912px;
        min-height: 200px;
        max-height: 100%;

        margin: 40px auto;
    }

`