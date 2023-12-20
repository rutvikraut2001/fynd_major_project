import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import { makeStyles } from "@material-ui/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DescriptionIcon from "@mui/icons-material/Description";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import {
  EmployeeListTable,
  ButtonDiv,
  SubmitButton,
  TableHeading,
  ViewEmployeeDetailsHeading,
  DivCloseButton,
  EmployeeDetailsModalParent,
  TableContainer2,
} from "../Employee-List-Admin/employee-list-admin.styles";
import Navbar from '../../../Navbar/navbar'

import { EmployeeDetailsModal } from './employee-list-emp.styles'
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: '55vh'
  },
  myDialog: {
    '&::-webkit-scrollbar': {
      background: 'transparent',
      width: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(0, 0, 0, 0.4)',
      borderRadius: '4px'
    }
  }
}));

const  EmpListEmp = () => {

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const currUser = useSelector((state) => state.currUser);
  const [tasks, setTasks] = useState([]);
  const [currTask, setCurrtask] = useState({});

  //----------------View task details modal----------------
  const [modalval, setmodalval] = useState(false);

  const showModal = () => {
    modalval ? setmodalval(false) : setmodalval(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    await axios.get("/api/task", {             //filter by user_id in backend
      headers: {
        'Authorization': `Bearer ${localStorage.token}` //for verification (IMP)
      }
    })       
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err)=> {
        console.log(err);
      })
  };

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  //--------------------Individual task data -----------
  const  viewDetails = async (id) => {
    await axios.get(`/api/task/${id}`, {
      headers: {
          'Authorization': `Bearer ${localStorage.token}`//for verification (IMP)
      }
  })
      .then((res) => {
        setCurrtask(res.data);
        showModal();
      })
      .catch((err)=> {
        console.log(err)
        Swal.fire("Oops!", err.response.data.message, "error");
      })
  }

  const tableHeaders = ['S No.', 'Assigned By', 'Assigned Date', 'Details'];

  return (
    <>
      <Navbar />
      <TableHeading> Assigned Tasks </TableHeading>
      <EmployeeListTable>
        <Paper className={classes.root}
          style={{ boxShadow: "0.5px 0.5px  10px rgb(65 64 66)" }} >
          <TableContainer className={`${classes.container} ${classes.myDialog}`} >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {tableHeaders.map((header) => (
                    <TableCell
                      align="center"
                      style={{
                        backgroundColor: "#D3D3D3",
                        fontWeight: 'bold'
                      }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((obj, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                        <TableCell align="center" style={{ fontWeight: "bold" }}>
                          {index + 1}
                        </TableCell>

                        <TableCell align="center">
                          {obj.assignedBy}
                        </TableCell>

                        <TableCell align="center">
                        {obj.date.slice(0, 10)}
                        </TableCell>

                        <TableCell align="center">
                          <Button onClick={() => viewDetails(obj._id)}>
                            <DescriptionIcon style={{ color: "#2550df" }} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={tasks.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </EmployeeListTable>

      {/* show details */}
      {modalval && (
        <EmployeeDetailsModalParent>
          <EmployeeDetailsModal>
            <TableContainer component={Paper}>
              <DivCloseButton>
                <CloseRoundedIcon onClick={showModal} />
              </DivCloseButton>
              <ViewEmployeeDetailsHeading>
                <AccountCircleRoundedIcon
                  style={{ width: "100px", height: "100px" }}
                />
              </ViewEmployeeDetailsHeading>
              <TableContainer2 className="table-container">
                <Table
                  sx={{ minWidth: "400px", width: "100%" }}
                  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>
                        Assigned By
                      </TableCell>
                      <TableCell>
                        {currTask?.assignedBy}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>
                        Task
                      </TableCell>
                      <TableCell>
                      {currTask?.task}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>
                        Date
                      </TableCell>
                      <TableCell>{currTask?.date.slice(0, 10)}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer2>
            </TableContainer>
          </EmployeeDetailsModal>
        </EmployeeDetailsModalParent>
      )}``
    </>
  );
}

export default EmpListEmp;
