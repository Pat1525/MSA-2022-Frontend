import axios from "axios";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import "./App.css";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// "id":237,
// "first_name":"LeBron",
// "last_name":"James",
// "height_feet": 6,
// "height_inches": 8,
// "weight_pounds": 250,

interface Nba {
  id:number;
  first_name:string;
  last_name:string;
  height_feet:number;
  height_inches:number;
  weight_pounds:number;

}

function App() {
  const [nbaName, setNbaName] = useState("");
  const [nbaInfo, setNbaInfo] = useState<undefined | Nba>(
    undefined
  );

  const NBA_BASE_API_URL = "https://www.balldontlie.io/api/v1/players/";
  return (
    
    <div>
      <h1>My favourite players</h1>
       <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Player Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">Lebron James</TableCell>
              <TableCell align="right">237</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">Kevin Durant</TableCell>
              <TableCell align="right">140</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">Stephen Curry</TableCell>
              <TableCell align="right">115</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">Kobe Bryant</TableCell>
              <TableCell align="right">1043</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">Luka Doncic</TableCell>
              <TableCell align="right">132</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
      <h1>Nba Search</h1>
      <div>
        <TextField
          id="search-bar"
          className="text"
          value={nbaName}
          onChange={(prop: any) => {
            setNbaName(prop.target.value);
          }}
          label="Enter a NBA ID..."
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton
          aria-label="search"
          onClick={() => {
            search();
          }}
        >
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </div>

      <p>You have entered {nbaName}</p>
      

      {nbaInfo === undefined ? (
        <p>Nba player not found</p>
      ) : (
        <div id="nba-result">
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Feet&nbsp;(Ft)</TableCell>
            <TableCell align="right">Inches&nbsp;(In)</TableCell>
            <TableCell align="right">Pounds&nbsp;(lb)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{nbaInfo.first_name}</TableCell>
              <TableCell align="right">{nbaInfo.last_name}</TableCell>
              <TableCell align="right">{nbaInfo.height_feet}</TableCell>
              <TableCell align="right">{nbaInfo.height_inches}</TableCell>
              <TableCell align="right">{nbaInfo.weight_pounds}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      )}
    </div>
  );

  function search() {
    axios
      .get(NBA_BASE_API_URL + nbaName.toLowerCase())
      .then((res) => {
        setNbaInfo(res.data);
      })
      .catch((err) => {
        console.log("Nba not found");
        setNbaInfo(undefined);
      });
  }
}

export default App;