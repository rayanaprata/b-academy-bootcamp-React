import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import { Header } from "./components/Header/index";
import { Menu } from "./components/Menu/index";
import { Sidebar } from "./components/Sidebar/index";
import { Contents } from "./components/Contents/index";
import { Footer } from "./components/Footer/index";

const articles = [
  {
    id: 1,
    title: 'Clean Architecture on Frontend', // https://dev.to/bespoyasov/clean-architecture-on-frontend-4311
    content: (
      <p>
        What is clean architecture in general and get familiar with
        such concepts as domain, use case and application layers.
      </p>
    )
  },
  {
    id: 2,
    title: 'React Practice Project for Beginner to Advance', // https://dev.to/undefinedhere/react-practice-project-for-beginner-to-advance-18da
    content: (
      <p>
        Many developers or beginners just learn all the fundamentals concepts
        but they don't implement those concepts.
        So Projects are one of the best ways to implement those concepts.
      </p>
    )
  },
  {
    id: 3,
    title: 'How I structure my React projects', // https://dev.to/larswaechter/how-i-structure-my-react-projects-jii
    content: (
      <p>
        Architecture of React: What should the folder structure look like?
      </p>
    )
  },
];

function App() {
  const [title, setTitle] = useState(articles[0].title);
  const [content, setContent] = useState(articles[0].content);

  function handleContent(e, id) {
    e.preventDefault();
    const newArticle = articles.find((article) => article.id === id);
    setTitle(newArticle.title);
    setContent(newArticle.content);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Menu />
        <Sidebar articles={articles} handleContent={handleContent} />
        <Contents title={title} content={content} />
        <Footer />
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`

const Container = styled.div`
  margin: 10vh 10vw;
  height: 80vh;
`;

export default App;