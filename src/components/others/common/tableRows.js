import React from 'react';
import {Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles= theme =>({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        marginTop: '10px'
    },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
    borderBottom: 'none !important'
  }
});

const CommonTableRows = props =>{
    return(
        <Table className="data-table">
            <TableHead>
                <TableRow>
                    <TableCell ></TableCell>
                    <TableCell align="justify"><b>GOLD</b></TableCell>
                    <TableCell align="justify"><b>DIAMOND</b></TableCell>
                    <TableCell align="justify"><b>PLATINUM</b></TableCell>
                </TableRow> 
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><b>Registration Requirements</b></TableCell>
                    <TableCell>{props.gold1}-{props.gold2} registrations</TableCell>
                    <TableCell>{props.diamond1}-{props.diamond2} registrations</TableCell>
                    <TableCell>Above {props.diamond2}  registrations</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='no-border'></TableCell>
                    <TableCell>One way fare</TableCell>
                    <TableCell>One way fare</TableCell>
                    <TableCell>Two way fare</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='no-border'></TableCell>
                    <TableCell>Certificate & Tag</TableCell>
                    <TableCell>Certificate & Tag</TableCell>
                    <TableCell>Certificate & Tag</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='no-border'></TableCell>
                    <TableCell>Post on Riviera page</TableCell>
                    <TableCell>Post on Riviera page</TableCell>
                    <TableCell>Post on Riviera page</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className='no-border'><b>Incentives</b> </TableCell>
                    <TableCell></TableCell>
                    <TableCell>4 days accomodation</TableCell>
                    <TableCell>4 days accomodation</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className='no-border'></TableCell>
                    <TableCell></TableCell>
                    <TableCell>Food coupons</TableCell>
                    <TableCell>Food coupons</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='no-border'></TableCell>
                    <TableCell></TableCell>
                    <TableCell>Goodies</TableCell>
                    <TableCell>Goodies</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>ProShow passes for 4 days</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

CommonTableRows.propTypes={
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CommonTableRows);