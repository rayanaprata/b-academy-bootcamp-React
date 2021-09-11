import "./index.css";
import { Button } from "../Buttons/index";
import { H3 } from "../Headings/index";

export function Contents(props) {
    return (
        <main>
            <article>
                <H3>{props.title}</H3>
                {props.content}
                <Button kind="secondary">Read More</Button>
            </article>
        </main>
    )
}