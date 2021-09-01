import "./style.css";
import { Header } from "./components/Header/index";
import { Menu } from "./components/Menu/index";
import { Sidebar } from "./components/Sidebar/index";
import { Contents } from "./components/Contents/index";
import { Footer } from "./components/Footer/index";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Sidebar />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;