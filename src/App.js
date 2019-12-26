import React,{ Component } from 'react';
import './App.css';
import { SignUp,SignIn } from './Components';
import { Route,BrowserRouter } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div>
              <BrowserRouter>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/signin" component={SignIn}/>
              </BrowserRouter>
            </div>
        );
    }
}

export default App;
