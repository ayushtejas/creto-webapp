import logo from './logo.svg';
import './App.css';
import Home from "./Components/Pages/Index";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Product from "./Components/Pages/product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



function App() {
  return (
    <>
    <Router>
    <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/product' component={Product}></Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
