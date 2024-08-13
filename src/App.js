import "./App.css";
import Layout from "./layout/Layout";
import About from "./layout/main/About";
import ContactMe from "./layout/main/ContactMe";
import Icons from "./layout/main/Icons";
import Projects from "./layout/main/Projects";
import { BrowserRouter } from "react-router-dom";
import { DarkThemeProvider } from "./providers/DarkThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DarkThemeProvider>
          <Layout>
            <About id="main"></About>
            <Icons></Icons>
            <Projects id="projects"></Projects>
            <ContactMe id="contact"></ContactMe>
          </Layout>
        </DarkThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
