import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.components";
import Header from "./components/header/header.components";
import History from "./pages/history/history.component";
import Movies from "./pages/movies/movies.components";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/movies" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;
