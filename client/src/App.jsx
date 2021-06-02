import NavBar from "./components/NavBar/NavBar";
import './App.css'
import { Redirect, Route, Switch } from "react-router";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/user";
import Disk from "./components/Disk/Disk";

function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  function authFunc (){
    dispatch(auth())
  }
  useEffect(authFunc, [])

  return (

    <div className="App">
      <NavBar />
      {
        !isAuth ?
          <Switch>
            <Route path="/login" component={() => (<Login />)} />
            <Route path="/registration" component={() => (<Registration />)} />
            <Redirect to="/login" />
          </Switch>
          : <Switch>
            <Route exact path="/" component={() => (<Disk />)} />
            <Redirect to="/" />
          </Switch>
      }


    </div>

  );
}

export default App;
