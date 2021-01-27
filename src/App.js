import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Content state={props.state} dispatch={props.dispatch} />
        <Sidebar state={props.state.dialogsPage.friends} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
