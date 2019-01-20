import React from 'react';
import {Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const CommonTableRows = props =>{
    return(
        <Table className="data-table">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
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
                    <TableCell className="no-border"></TableCell>
                    <TableCell>One way fare</TableCell>
                    <TableCell>One way fare</TableCell>
                    <TableCell>Two way fare</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="no-border"></TableCell>
                    <TableCell>Certificate & Tag</TableCell>
                    <TableCell>Certificate & Tag</TableCell>
                    <TableCell>Certificate & Tag</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="no-border"></TableCell>
                    <TableCell>Post on Riviera page</TableCell>
                    <TableCell>Post on Riviera page</TableCell>
                    <TableCell>Post on Riviera page</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className="no-border"><b style={{fontSize:'1.5em'}}>Incentives</b> </TableCell>
                    <TableCell></TableCell>
                    <TableCell>4 days accomodation</TableCell>
                    <TableCell>4 days accomodation</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell className="no-border"></TableCell>
                    <TableCell></TableCell>
                    <TableCell>Food coupons</TableCell>
                    <TableCell>Food coupons</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="no-border"></TableCell>
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

export default CommonTableRows;