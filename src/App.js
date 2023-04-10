import "./index.css";
// import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Main from "./containers/main/main";
// import Member from "./components/member/Member";
import Navbar from "./components/navbar/Navbar";
import Footer from "./containers/footer/footer";
// import Member from "./components/member/member";

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

/* <Navbar />
<Header />
</div>
<Brand />
<Weeekly />
<Features />
<Possibility />
<CTA />
<Blog />
<Footer /> */
