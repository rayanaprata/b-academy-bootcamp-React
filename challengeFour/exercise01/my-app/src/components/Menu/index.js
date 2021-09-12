import styled from 'styled-components';
import { Button } from "../Buttons/index";

export function Menu() {
    return (
        <Nav>
            <List>
               <li><Button kind="primary">Menu 1</Button></li> 
               <li><Button kind="primary">Menu 2</Button></li> 
               <li><Button kind="primary">Menu 3</Button></li> 
               <li><Button kind="primary">Menu 4</Button></li> 
               <li><Button kind="primary">Menu 5</Button></li> 
            </List>
        </Nav>
    );
}

const Nav = styled.nav`
    background-color: rgb(255, 243, 202);
    margin-bottom: 10px;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`;