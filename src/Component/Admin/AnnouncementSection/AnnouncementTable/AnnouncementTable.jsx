import React from 'react'
import './AnnouncementTable.css'
import TableRow from "./TableRow/TableRow";

function AnnouncementTable({array}) {





    return (
        <React.Fragment>
            <div className="ann-table-background">
                <div className="ann-table-title-header">
                    <h1 className="ann-teacherTable">Announcement Details Table</h1>
                    <div className="ann-bar-teacher-table">
                        {/*<TextField*/}
                        {/*    placeholder="Search by name.."*/}

                        {/*    margin="normal"*/}
                        {/*    className="search-teacher"*/}
                        {/*    //value={searchTerm}*/}
                        {/*    //onChange={(event) => setSearchTerm(event.target.value)}*/}
                        {/*    style={{backgroundColor: "#FFFFFF", width: 300, borderRadius: 8.74, height: 30, paddingLeft: 10}}*/}
                        {/*/>*/}
                    </div>
                </div>
                {/*<TableContainer component={Paper} className={classes.teacherContent}>*/}
                {/*    <Table className={classes.table} aria-label="simple table">*/}
                {/*        <TableHead className="teacher-table-header">*/}
                {/*            <TableRow >*/}
                {/*                <TableCell align="center" >Class Name</TableCell>*/}
                {/*                <TableCell align="center" >Announcement Header</TableCell>*/}
                {/*                <TableCell align="center" >Announcement Body</TableCell>*/}
                {/*            </TableRow>*/}
                {/*        </TableHead>*/}
                {/*        <TableBody>*/}
                {/*        </TableBody>*/}
                {/*    </Table>*/}

                {/*</TableContainer>*/}
                {/*<TablePagination*/}
                {/*    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}*/}
                {/*    colSpan={3}*/}
                {/*    count={filteredData ? filteredData.length : 1}*/}
                {/*    rowsPerPage={rowsPerPage}*/}
                {/*    page={page}*/}
                {/*    //classes={{ ul: classes.ul }}*/}
                {/*    SelectProps={{*/}
                {/*        inputProps: { 'aria-label': 'rows per page' },*/}
                {/*        native: true,*/}
                {/*    }}*/}
                {/*    component="div"*/}
                {/*    onPageChange={handleChangePage}*/}
                {/*    onRowsPerPageChange={handleChangeRowsPerPage}*/}
                {/*    //className={classes.table}*/}
                {/*/>*/}
            </div>
        </React.Fragment>

    )
}
export default AnnouncementTable






