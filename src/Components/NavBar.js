import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


export default class NavBar extends React.PureComponent{
    render() {
        return(
            <div className="root">
                <AppBar position="static" className="color">
                    <Toolbar className="color">
                        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                        </IconButton>
                        <Typography variant="h6" className="title">
                            GuGuSa
                        </Typography>
                        <Button color="inherit"><Link className="navButton" to="/Project">Project</Link></Button>
                        <Button color="inherit"><Link className="navButton" to="/SignIn">Login</Link></Button>
                        <Button color="inherit"><Link className="navButton" to="/SignUp">SignUp</Link></Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}