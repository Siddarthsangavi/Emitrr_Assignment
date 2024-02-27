import React from 'react'
import "./componentsStyle.css";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Highscore({ highscore }) {


  return (
    <div className=''>
  <h1 style={{ color: "black" }}>Highscores (Top 10)</h1>
  <div className=''>
    <>
      <TableContainer component={Paper} style={{ background: "linear-gradient(to bottom, #f0c760, #dc954a, #e18026)" }}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> <b>User</b> </TableCell>
              <TableCell align="right"><b>Score</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {highscore.leaderboard.Users && highscore.leaderboard.Users.slice(0, 10).reverse().map((entry, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {console.log("GHJ",highscore)}
                  {entry.username}
                </TableCell>
                <TableCell align="right">{entry.points}</TableCell>
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    </>
  </div>
</div>
  )
}

export default Highscore