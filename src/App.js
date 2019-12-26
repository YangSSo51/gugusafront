import React,{ Component } from 'react';
import './App.css';
import { SignUp,SignIn,detail } from './Components';
import { Route, BrowserRouter } from 'react-router-dom';
import NavBar from "./Components/NavBar";


class App extends Component {
    render() {
        return (
            <div>
                  <BrowserRouter>
                    <NavBar/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/detail" component={detail}/>
                  </BrowserRouter>
            </div>
        );
    }
}

export default App;
