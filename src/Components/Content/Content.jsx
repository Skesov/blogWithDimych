import React from "react";

import Dialogs from "./Dialogs/Dialogs";
import { Route } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

function Content(props) {
  return (
    <div className="content">
      <Route exact path="/">
        <StartPage posts={props.posts} />
      </Route>
      <Route path="/dialogs">
        <Dialogs friends={props.friends} messages={props.messages} />
      </Route>
      <Route path="/profile">
        <StartPage posts={props.posts} />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/music">
        <Music />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </div>
  );
}

export default Content;
