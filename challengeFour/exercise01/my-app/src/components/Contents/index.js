import styled from 'styled-components';
import { Button } from "../Buttons/index";
import { H3 } from "../Headings/index";

export function Contents(props) {
    return (
        <Main>
            <Article>
                <H3>{props.title}</H3>
                {props.content}
                <Button kind="secondary">Read More</Button>
            </Article>
        </Main>
    )
}

const Main = styled.main`
    background-color: rgb(202, 243, 255);
    height: 55vh;
    width: calc(100% - (20vw + 10px));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: right;
`;

const Article = styled.article`
    padding: 1vh 3vw;
`;