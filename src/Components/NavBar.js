import React,{Component} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class NavBar extends React.PureComponent{
    render() {
        return(
            <div className="header">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper>hello</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}