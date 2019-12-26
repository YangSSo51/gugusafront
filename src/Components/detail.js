import React from "react";
import {Container,Grid,Paper} from "@material-ui/core";
import api from "../api";
import DetailView from './detailView'

const dummy_prop = {
    title:'테스트용 타이틀입니다',
    content:'테스트용 글입니다',
    author:'테스터'
}

export default class detail extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={
            results: []
        }
    }

    componentDidMount() {
        this.getDetail()
    }

    async getDetail(){
        const _results = await api.getDetail(this.props.match.params.id)
        console.log(_results)
        this.setState({results:_results.data})
    }

    render() {
        return(
            <Container>
                <div className="paper">
                    <Grid container direction="column" wrap="nowrap" spacing={1}>
                        <Paper className="detailPaper">
                            <DetailView key={this.state.results["id"]} id={this.state.results["id"]}
                                        title={this.state.results["pro_title"]} content={this.state.results["pro_content"]}/>
                        </Paper>
                    </Grid>
                </div>
            </Container>
        )
    }
}
