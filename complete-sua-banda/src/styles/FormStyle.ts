import styled from "styled-components"

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;

@media (min-width: 768px) {
    margin-top: 0px;
    background: var(--color-grey-4);
    box-shadow: 5px 4px 0px var(--color-brand);
    border-radius: 8px;
    padding: 39px 19px 35px 19px;
}
`