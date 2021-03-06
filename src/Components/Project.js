import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import api from '../api';
import TableView from './TableView'

export default class Project extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state= {
            results:[]
        }
    }
    componentDidMount() {
        this.getPosts()
    }

    async getPosts(){
        const _results  = await api.getAllPosts()
        console.log(_results)
        this.setState({results:_results.data})
    }

  render() {
  return (
    <div className="margin">
    <Container maxWidth="lg">
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableBody>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell align="left">작성자</TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    {this.state.results.map((row) =>
                        <TableView key={row.id} id={row.id} title={row.pro_title}/>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
    </div>
  );
}
}