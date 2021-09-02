import "./index.css";
import { useState } from 'react';
import { Button } from "../Buttons/index";
import { H3 } from "../Headings/index";

export function Contents(props) {
    const [title, setTtile] = useState(props.articles[0].title);
    const [content, setContent] = useState(props.articles[0].content);

    return (
        <main>
            <article>
                <H3>{title}</H3>
                {content}
                <Button kind="secondary">Read More</Button>
            </article>
        </main>
    )
}