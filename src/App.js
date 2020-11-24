import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Content posts={props.posts} friends={props.friends} messages={props.messages}/>
        <Navbar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;