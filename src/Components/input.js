import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';



export default class Input extends React.Component{
render() {
  return (
    <Container maxWidth="sm">
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}>
        <div class="container_center">
        <Typography variant="caption">
          제목
        </Typography> 
        </div>       
        </Grid>
        <Grid item xs={12} sm={10}>
            <TextField fullWidth id="standard-basic" label="제목" />     
        </Grid>
        <Grid item xs={12} sm={2}>
        <div class="container_center">
        <Typography variant="caption">
          내용
        </Typography>       
        </div>  
        </Grid>
        <Grid item xs={12} sm={10} fullWidth>
        <TextField
          id="standard-multiline-static"
          label="내용"
          multiline
          fullWidth
          rows="20"
        />        
        </Grid>
      </Grid>
    </div>
    </Container>
  );
}
}
