import styled from "styled-components"

export const ContainerUlMusician = styled.ul`
    background-color: #4C4948;
    overflow: auto;
    height: 100vh;

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px 96px;

        max-width: 912px;
        height: 100%;

        margin: 40px auto;
    }

`
export const UlNotifications = styled.div`
    background-color: #191818;
    min-height: 80px;
    display: flex;
    width: 320px;
    position: absolute;
    top: 98px;
    right: 85px;
    flex-direction: column;
    max-height: 500px;
    overflow: auto;
`
export const CardNotifications = styled.li`
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 7px 22px;
    box-sizing: border-box;
    border-bottom: 1px solid;
    color: #fff;
    gap: 16px;
    align-items: center;

    div{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    div > div{
        flex-direction: column;
    }

    figure{
        margin: 0;
    }
    img{
        height: 53px;
        width: 53px;
        border-radius: 50%;
        background-color: red;
    }

    button{
        background: transparent;
        border: 1px solid white;
        color: white;
        font-size: 19px;
        border-radius: 50%;
        cursor: pointer;
    }
`