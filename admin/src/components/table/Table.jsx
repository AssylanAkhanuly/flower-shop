import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";

//temp
const data = [
  {
    _id: "3kfjb9S4FDGu5rmkFDGdff",
    receiver: {
      name: "John",
      phone: "+7(775) 750 59 29",
      address: "Kabanbay Batyr 53",
    },
    products: [
      {
        _id: "3kfjb9S4FDGu5rsfdmkFDGdff",
        name: "Summer",
        img: "./assets/bouquet-1.jpg",
        subCategory: "top-seller",
        category: "bouquet",
        quantity: 1,
      },
      {
        _id: "3kfjb9S4FDGsdfu5rsfdmkFDGdff",
        name: "Winter",
        img: "./assets/bouquet-2.jpg",
        subCategory: "top-seller",
        category: "bouquet",
        quantity: 1,
      },
      {
        _id: "3kfjb9S4FfdfDGu5rsfdmkFDGdff",
        name: "Summer",
        img: "./assets/bouquet-1.jpg",
        subCategory: "top-seller",
        category: "bouquet",
        quantity: 1,
      },
      {
        _id: "3kfjb9S4FDGu5rsdsfdmkFDGdff",
        name: "Summer",
        img: "./assets/bouquet-1.jpg",
        subCategory: "top-seller",
        category: "bouquet",
        quantity: 1,
      },
    ],
    status: "Pending",
    timestamp: Date.now(),
    deadline: Date.now(),
  },
  {
    _id: "3kfjb9S4FDGu5rmkFDGdff",
    receiver: {
      name: "John",
      phone: "+7(775) 750 59 29",
      address: "Kabanbay Batyr 53",
    },
    products: [
      {
        _id: "3kfjb9S4FDGu5rsfdmkFDGdff",
        name: "Summer",
        img: "./assets/bouquet-1.jpg",
        subCategory: "top-seller",
        category: "bouquet",
        quantity: 1,
      },
      {
        _id: "3kfjb9S4FDGsdfu5rsfdmkFDGdff",
        name: "Winter",
        img: "./assets/bouquet-2.jpg",
        subCategory: "top-seller",
        category: "bouquet",
        quantity: 1,
      },
      {
        _id: "3kfjb9S4FfdfDGu5rsfdmkFDGdff",
        name: "Summer",
        img: "./assets/bouquet-1.jpg",
        subCategory: "top-seller",
        category: "bouquet",
        quantity: 1,
      },
      {
        _id: "3kfjb9S4FDGu5rsdsfdmkFDGdff",
        name: "Summer",
        img: "./assets/bouquet-1.jpg",
        subCategory: "top-seller",
        category: "bouquet",
        quantity: 1,
      },
    ],
    status: "Finished",
    timestamp: Date.now(),
    deadline: Date.now(),
  },
];
export default function DataGrid() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-head" align="center">Customer</TableCell>
            <TableCell className="table-head" align="center">Address</TableCell>
            <TableCell className="table-head" align="center">Phone</TableCell>
            <TableCell className="table-head" align="center">Photo</TableCell>
            <TableCell className="table-head" align="center">Status</TableCell>
            <TableCell className="table-head" align="center">Deadline</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow  key={row._id}>
              <TableCell component="th" align="center" scope="row">
                {row.receiver.name}
              </TableCell>
              <TableCell align="center">{row.receiver.address}</TableCell>
              <TableCell align="center">{row.receiver.phone}</TableCell>
              <TableCell align="center">
                <div className="cell-wrapper">
                  {row.products.map((product) => (
                    <img
                      key={product._id}
                      className="cell-img"
                      src={product.img}
                      alt="product"
                    />
                  ))}
                </div>
              </TableCell>
              <TableCell align="center">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell align="center">
                {row.deadline.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
