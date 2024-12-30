import styled from "styled-components";

export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    font-size: ${(props) => `${props.fontSize}px`};
    font-weight: bold;
    color: #000000;
    background-color: #3ebeee;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;