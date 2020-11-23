import React from "react";

import Dialogs from "./Dialogs/Dialogs";
import { Route } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

function Content(props) {
  return (
      <div class="content">
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={StartPage} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
  );
}

export default Content;
