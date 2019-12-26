import React,{ Component } from 'react';
import './App.css';
import { SignUp,SignIn } from './Components';
import { Route,BrowserRouter } from 'react-router-dom';
import NavBar from "./Components/NavBar";


class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                  <BrowserRouter>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/signin" component={SignIn}/>
                  </BrowserRouter>
            </div>
        );
    }
}

export default App;
