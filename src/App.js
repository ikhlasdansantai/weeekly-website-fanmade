import "./index.css";
import Header from "./containers/header/Header";
import Main from "./containers/main/main";
import Navbar from "./components/navbar/Navbar";
import Footer from "./containers/footer/footer";

function App() {
  return (
    <div className="App overflow-hidden">
      <Header>
        <Navbar />
      </Header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
