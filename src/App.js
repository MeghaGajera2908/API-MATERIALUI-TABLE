import './App.css';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

function App() {

  const [respons, setRespons] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums`)
      .then(res => {
        console.log(res)
        setRespons(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  console.log(respons);
  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 10 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">userId</TableCell>
              <TableCell align="center">id</TableCell>
              <TableCell align="center">title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {respons?.map((item) => {
              return (
                <TableRow
                  key={respons.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{item.userId}</TableCell>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.title}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
