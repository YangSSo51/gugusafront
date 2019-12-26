import React,{Component} from "react";
import {Grid} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

export default class detailView extends Component{

    render() {
        const {id,title,content} = this.props

        return(
            <div>
                <Grid container>
                    <Grid item><PersonIcon style={{fontSize:80}}></PersonIcon></Grid>
                    <Grid xs><p className="author">{id}</p></Grid>
                </Grid>
                <Grid item>
                    <h1>{title}</h1>
                </Grid>
                <Grid item>
                    {content}
                </Grid>
            </div>
        )
    }
}