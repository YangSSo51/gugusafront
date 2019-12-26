import React from "react";
import {Container,Grid,Paper} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

const dummy_prop = {
    title:'테스트용 타이틀입니다',
    content:'테스트용 글입니다',
    author:'테스터'
}

export default class NavBar extends React.PureComponent{

    render() {
        const {id,title,author,content} = dummy_prop
        return(
            <Container>
                <div className="paper">
                    <Grid container direction="column" wrap="nowrap" spacing={1}>
                        <Paper className="detailPaper">
                        <Grid container>
                            <Grid item><PersonIcon style={{fontSize:80}}></PersonIcon></Grid>
                            <Grid xs><p className="author">{author}</p></Grid>
                        </Grid>
                        <Grid item>
                            <h1>{title}</h1>
                        </Grid>
                        <Grid item>
                            {content}
                        </Grid>
                        </Paper>
                    </Grid>
                </div>
            </Container>
        )
    }
}
