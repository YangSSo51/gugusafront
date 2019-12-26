import React,{ Component } from 'react';
import './App.css';
import { SignUp,SignIn,Project,input,Detail } from './Components';
import { Route,BrowserRouter } from 'react-router-dom';
import NavBar from "./Components/NavBar";

class App extends Component {
  state = {
    posts: []
};

async componentDidMount() {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/project');
        res.header("Access-Control-Allow-Origin", "*");
        const posts = await res.json();
        this.setState({
            posts
        });
        console.log(posts);
    } catch (e) {
        console.log(e);
    }
}

    render() {
        return (
          <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
            </div>
            
        );
    }
}

export default App;
