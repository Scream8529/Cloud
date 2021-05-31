import NavBar from "./components/NavBar/NavBar";
import './App.css'
import { Route } from "react-router";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

function App() {
  return (

    <div className="App">
      <NavBar />
      <Route path="/login" component={()=>(<Login />)}/>
      <Route path="/registration" component={()=>(<Registration />)}/>
    </div>

  );
}

export default App;
