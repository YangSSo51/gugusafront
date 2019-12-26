import React,{Component} from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default class TableView extends Component{
    render() {
        const {id,title,content,author} = this.props
        return (
            <TableRow key={id}>
                <TableCell align="left">{id}</TableCell>
                <Link to = {'./detail/$id'}>
                <TableCell component="th" scope="row">
                    {title}
                </TableCell>
                </Link>
                <TableCell align="left">{author}</TableCell>
            </TableRow>
        )
    }
}