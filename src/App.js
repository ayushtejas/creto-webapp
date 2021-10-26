import logo from './logo.svg';
import './App.css';
import Home from "./Components/Pages/Index";
import Login from "./Components/Pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



function App() {
  return (
    <>
    <Router>
    <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/login' component={Login}></Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
