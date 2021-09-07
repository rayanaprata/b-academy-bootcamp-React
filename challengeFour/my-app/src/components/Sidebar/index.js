import "./index.css";

export function Sidebar(props) {
    return (
        <aside>
            <ul className="links-sidebar">
                {props.articles.map((item) => (
                    <li key={item.id}>
                        <a className="link-sidebar" onClick={(e) => props.handleContent(e, item.id)} href="/"> - {item.title}</a>
                    </li>
                ))}
            </ul> 
        </aside>
    );
}