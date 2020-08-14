import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { InformalPosts } from "./components/InformalPosts";
import { WorkPosts } from "./components/WorkPosts";
import { Introduce } from "./components/Introduce";
import { Registration } from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Wrapper">
          <div className="header-main">
            <Profile />
            <Header />
          </div>
          <div className="Body">
            <Navbar />
            <Switch>
              <Route path={"/"} exact component={Introduce} />
              <Route path={"/registration"} exact component={Registration} />
              <Route path={"/work"} component={WorkPosts} />
              <Route path={"/informal"} component={InformalPosts} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
