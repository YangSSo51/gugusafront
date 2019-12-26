import React,{Component} from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default class TableView extends Component{
    render() {
        const {id,title,content,author} = this.props
        return (
            <TableRow key={id}>
                <TableCell align="left">{id}</TableCell>
                <TableCell component="th" scope="row">
                    {title}
                </TableCell>
                <TableCell align="left">{author}</TableCell>
            </TableRow>
        )
    }
}