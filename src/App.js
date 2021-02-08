import "./App.scss";
import { useRef, createRef } from "react";
import SideNav from "./Components/SideNav/SideNav";
import Player from "./Components/Player";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Views/Home";
import Browse from "./Views/Browse";
import Radio from "./Views/Radio";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);
const main = createRef();
const App = () => {
  const textInput = createRef();
  const handleScrolling = (ev) => {
    const header = ev.target.children[0];
    const heading = ev.target.children[1];
    console.log(ev.target.scrollTop);
    if (ev.target.scrollTop > 15) {
      if (!heading.classList.contains("scrolled")) {
        heading.classList.add("scrolled");
      }
      header.classList.add("scrolled");
    } else if (ev.target.scrollTop === 0) {
      heading.classList.remove("scrolled");
      header.classList.remove("scrolled");
    }
  };

  return (
    <BrowserRouter location="/home">
      <div className="App">
        <div className="main" ref={main} onScroll={handleScrolling}>
          <Header />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/radio">
            <Radio />
          </Route>
        </div>

        <SideNav />
        <Player />
      </div>
    </BrowserRouter>
  );
};
export default App;
