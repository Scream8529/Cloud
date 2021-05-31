import NavBar from "./components/NavBar/NavBar";
import './App.css'
import { Route, Switch } from "react-router";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/user";

function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(auth())
  }, [])

  return (

    <div className="App">
      <NavBar />
      {
        !isAuth &&
        <Switch>
          <Route path="/login" component={() => (<Login />)} />
          <Route path="/registration" component={() => (<Registration />)} />
        </Switch>
      }


    </div>

  );
}

export default App;
