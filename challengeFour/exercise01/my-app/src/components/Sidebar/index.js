import styled from 'styled-components';

export function Sidebar(props) {
    return (
        <Aside>
            <LinksSidebar>
                {props.articles.map((item) => (
                    <li key={item.id}>
                        <LinkSidebar onClick={(e) => props.handleContent(e, item.id)} href="/"> - {item.title}</LinkSidebar>
                    </li>
                ))}
            </LinksSidebar> 
        </Aside>
    );
}

const Aside = styled.aside`
    background-color: rgb(204, 255, 202);
    display: inline-block;
    padding: 18% 0;
    margin:  0 10px 10px 0;
    height: 55vh;
    width: 20vw;
`;

const LinksSidebar = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
`;

const LinkSidebar = styled.a`
    color:rgb(63, 109, 61);
    text-decoration: none;

    &:hover {
        color:rgb(7, 63, 5);
    }
`;
