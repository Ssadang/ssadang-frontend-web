import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-items: center;
    align-items: center;
`;

export const ContentBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1400px;
    height: 50px;
`;

export const RouteButton = styled.div`
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        color: #3ebeee;
    }
    color: ${(props) => (props.className === 'active' ? '#3ebeee' : 'black')};
`;