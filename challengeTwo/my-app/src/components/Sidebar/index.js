import "./index.css";

export function Sidebar(props) {

    console.log(props);

    return (
        <aside>
            <ul className="links-sidebar">
                {props.articles.map((item) => (
                    <li key={item.id}>
                        <a className="link-sidebar" href="/"> - {item.title}</a>
                    </li>
                ))}
            </ul> 
        </aside>
    );
}