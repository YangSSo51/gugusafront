import React,{Component} from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import format from 'string-format'

export default class TableView extends Component{
    render() {
        const {id,title,author} = this.props;
        return (
            <TableRow key={id}>
                <TableCell align="left">{id}</TableCell>
                <TableCell component="th" scope="row">
                    <Button href={format('./detail/{}',id)}>
                        {title}
                    </Button>
                </TableCell>
                <TableCell align="left">{author}</TableCell>
            </TableRow>
        )
    }
}