import "./index.css";

export function Button({ kind, children }) {
    return <button className={kind}>{children}</button>;
}