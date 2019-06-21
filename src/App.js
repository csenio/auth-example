import React, { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Protected() {
  return <h2>Protected</h2>;
}

function NotAllowed() {
  return <h2>NOT ALLOWED</h2>;
}

const AuthenticatedRouter = ({ children }) => (
  <Router>
    <Route path="/" exact component={Index} />
    <Route path="/about/" component={About} />
    <Route path="/protected/" component={Protected} />
    {children}
  </Router>
);

const UnAuthenticatedRouter = ({ children }) => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route component={NotAllowed} />
    </Switch>

    {children}
  </Router>
);

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <div className="App">
      {isAuth ? (
        <AuthenticatedRouter>
          {" "}
          <Nav />
        </AuthenticatedRouter>
      ) : (
        <UnAuthenticatedRouter>
          <Nav />
        </UnAuthenticatedRouter>
      )}
      <button onClick={() => setAuth(a => !a)}>
        {isAuth ? "log out" : "log in"}
      </button>
    </div>
  );
}

const Nav = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about/">About</Link>
    </li>
    <li>
      <Link to="/protected/">protected</Link>
    </li>
  </ul>
);

export default App;
