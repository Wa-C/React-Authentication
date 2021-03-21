
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header'
import Blog from './components/Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name : '',
    email: '',
    password: '',
    photo: '',
    error:'',
    success: false
  });
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        {/* <p>Name : {loggedInUser.name} </p> */}
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Destination path="/destination">
          <Destination />
        </Destination>

        <Route path="*">
          <h1 className="text-center my-5">404 - Not Found!</h1>
        </Route>
      </Switch>
 </Router>
 </UserContext.Provider>
 </div>

  );
}

export default App;
