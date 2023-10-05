// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { TextField, Paper } from '@mui/material';
// import TableContainer from '@mui/material/TableContainer';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import TablePagination from '@mui/material/TablePagination';

// function DataTable() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(15);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const filteredData = data.filter((row) =>
//     Object.values(row).some((value) =>
//       value.toString().toLowerCase().includes(searchText.toLowerCase())
//     )
//   );

//   const rowsToDisplay = filteredData.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );
//   const { globalFilter } = state;

//   return (
//     <div className="table-container bg-white m-10 p-5">
//       <TextField className='!text-white'
//         label="Search"
//         variant="outlined"
//         size="small"
//         value={searchText} s
//         onChange={(e) => setSearchText(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <TablePagination className='bg-white'
//         rowsPerPageOptions={[10, 20, 25, 50, 75]}
//         component="div"
//         count={filteredData.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>User ID</TableCell>
//               <TableCell>ID</TableCell>
//               <TableCell>Title</TableCell>
//               <TableCell>Body</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rowsToDisplay.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.userId}</TableCell>
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>{row.title}</TableCell>
//                 <TableCell>{row.body}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//     </div>
//   );
// }

// export default DataTable;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Paper } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';

function DataTable() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data); // Initialize filtered data with all data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // When the search text changes, filter the data
    const filtered = data.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [searchText, data]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rowsToDisplay = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="table-container bg-white m-10 p-5 rounded-xl">
      <div className='flex items-center justify-between flex-wrap'>

        <TextField
          className='sm:!w-1/3'
          label="Search"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 25, 50, 75]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsToDisplay.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;
