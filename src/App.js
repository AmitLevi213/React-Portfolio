import "./App.css";
import Layout from "./layout/Layout";
import About from "./layout/main/About";
import CV from "./layout/main/CV";
import ContactMe from "./layout/main/ContactMe";
import Icons from "./layout/main/Icons";
import Projects from "./layout/main/Projects";

import { DarkThemeProvider } from "./providers/DarkThemeProvider";

function App() {
  return (
    <div className="App">
      <DarkThemeProvider>
        <Layout>
          <About></About>
          <Icons></Icons>
          <CV></CV>
          <Projects></Projects>
          <ContactMe></ContactMe>
        </Layout>
      </DarkThemeProvider>
    </div>
  );
}

export default App;
