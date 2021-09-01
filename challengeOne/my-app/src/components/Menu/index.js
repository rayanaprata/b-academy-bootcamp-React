import "./index.css";
import { Button } from "../Buttons/index";

export function Menu() {
    return (
        <nav>
            <ul>
               <li><Button kind="primary">Menu 1</Button></li> 
               <li><Button kind="primary">Menu 2</Button></li> 
               <li><Button kind="primary">Menu 3</Button></li> 
               <li><Button kind="primary">Menu 4</Button></li> 
               <li><Button kind="primary">Menu 5</Button></li> 
            </ul>
        </nav>
    );
}