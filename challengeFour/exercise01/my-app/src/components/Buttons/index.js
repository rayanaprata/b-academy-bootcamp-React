import styled from 'styled-components';

export function Button({ kind, children }) {
    return <Btn kind={kind}>{children}</Btn>;
}

const Btn = styled.button`
    cursor: pointer;
    border: none;
    padding: 0.5em;

    ${({kind}) => handleBtnStyle(kind)}
`;

const handleBtnStyle = (style) => {
    switch (style) {
        case 'primary':
            return `
                background-color: rgb(255, 235, 168);
                color: #383838;

                &:hover {
                    background-color: rgb(255, 207, 49);
                    color: #fffbdd;
                }
            `;
        case 'secondary':
            return `
                background-color: rgb(43, 171, 245);
                color: #fffbdd;

                &:hover {
                    background-color: rgb(153, 209, 241);
                    color: #383838;
                }
            `;
        default:
            return ``;
    }
}