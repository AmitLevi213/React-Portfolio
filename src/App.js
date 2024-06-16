import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import { DarkThemeProvider } from "./providers/DarkThemeProvider";

function App() {
  return (
    <div className="App">
      <DarkThemeProvider>
        <Header />
        <Main />
        <Footer />
      </DarkThemeProvider>
    </div>
  );
}

export default App;
