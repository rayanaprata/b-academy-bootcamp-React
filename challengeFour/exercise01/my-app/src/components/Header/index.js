import styled from 'styled-components';
import { H1 } from "../Headings/index";

export function Header() {
    return <HeaderSt><H1>Header</H1></HeaderSt>;
}

const HeaderSt = styled.header`
    background-color: rgb(255, 202, 202);
    margin-bottom: 10px;
    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;