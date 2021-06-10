import NavBar from "./components/NavBar/NavBar";
import './App.css'
import { Redirect, Route, Switch } from "react-router";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/user";
import Disk from "./components/Disk/Disk";
import { initializedAC } from "./redux/initReducer";
import Loader from "./components/Loader/Loader";
import Profile from "./components/Profile/Profile";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const init = useSelector(state => state.init.initialized)
  const dispatch = useDispatch();
  const  authFunc = async () =>{
    await dispatch(auth())
    dispatch(initializedAC())
  }
  useEffect(()=>{authFunc()}, [])
  if (!init){
  return <>
  <Loader />
  </>}

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
            <Route exact path="/profile" component={() => (<Profile />)} />
            <Redirect to="/" />
          </Switch>
      }


    </div>

  );
}

export default App;
