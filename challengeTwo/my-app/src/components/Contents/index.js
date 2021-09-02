import "./index.css";
import { Button } from "../Buttons/index";
import { H2, H3 } from "../Headings/index";

export function Contents() {
    return (
        <main>
            <H2>Articles</H2>
            <article>
                <H3>Lorem Ipsum</H3>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <Button kind="secondary">Read More</Button>
            </article>
            <article>
                <H3>Lorem Ipsum</H3>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <Button kind="secondary">Read More</Button>
            </article>
        </main>
    )
}