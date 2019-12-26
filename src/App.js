import React,{ Component } from 'react';
import './App.css';
import { SignUp,SignIn,Project,input,Detail } from './Components';
import { Route,BrowserRouter } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Container from '@material-ui/core/Container';

class App extends Component {
    render() {
        return (
            <div className="font">
                <NavBar/>
                  <BrowserRouter>
                    <NavBar/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/detail" component={Detail}/>
                    <Container maxWidth="lg">
                    <Route exact path="/project" component={Project}/>
                    </Container>
                    <Route exact path="/input" component={input}/>
                  </BrowserRouter>
            </div>
        );
    }
}

export default App;
