import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 0,
    marginTop: "2em",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  status: {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 15,
    fontSize: 25,
    padding: "3px 10px",
    display: "inline-bloc",
  },
  search: {
    marginBottom: 2,
  },
}));
const Mtable = (props) => {
  const classes = useStyles();
  //destructuration
  const { datas } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [rows, setRows] = useState(datas);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = datas.filter((row) => {
      return row.alphaNum.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  if (!datas || datas.length === 0) return <p>No data found, sorry</p>;
  const styles = {
    marginBottom : '10px',
    borderRadius : 0,
    width : '100%',
    

  }
  return (
    <div>
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        style={styles}
      />
      <div></div>
      <TableContainer component={Paper}>
        <Table exportButton={true} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>
                Id Mobile
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Alpha Num
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Num App</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Note Symbole
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Note Numeratie
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Note Litteratie
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.idmobileapha}
                  </TableCell>
                  <TableCell>{data.alphaNum}</TableCell>
                  <TableCell>{data.numApp}</TableCell>
                  <TableCell>{data.notesymbole}</TableCell>
                  <TableCell>{data.notenumeratie}</TableCell>
                  <TableCell>{data.notelitteratie}</TableCell>
                  <TableCell>
                    {data.notesymbole >= 10 ? (
                      <ThumbUpAltRoundedIcon color="success" />
                    ) : (
                      <ThumbDownAltRoundedIcon color="error" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            {/*  {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )} */}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={datas.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default Mtable;
