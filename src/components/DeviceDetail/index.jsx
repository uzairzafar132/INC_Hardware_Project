import React from "react";
import { useParams, Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Typography from "@mui/material/Typography";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import "material-design-iconic-font/dist/css/material-design-iconic-font.css";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";

const btnSX = {
  "&:hover": {
    backgroundColor: "#a9a9a9",
  },
};

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "#1717a5",
    },
  },
  customStyle: {
    paddingLeft: "px !important",
    padding: "25px 25px 25px 25px !important",
    color: "black",
    textDecoration: "none",
  },
  thead: {
    fontSize: "15px !important",
  },
  headcell: {
    paddingLeft: "8px !important",
    paddingRight: "0px !important",
  },
});

function DeviceDetail() {
  const { id } = useParams();
  const classes = useStyles();
  const [items, setItems] = useState({});
 
  const handleLogout = () => {
    localStorage.removeItem("token");
   window.location = "/";
  };


    
 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get(`http://localhost:8080/api/usersdata/${id}`);
       setItems(response.data);
       console.log(response.data);
      
       
     } catch (error) {
       console.log(error);
     }
   };
   fetchData();
 }, []);



//   const [deviceData, setDeviceData] = useState({})
  const deviceData = [
    { id: 1, coinIn: 10, coinOut: 5, readingTakeTime: 2 },
    { id: 2, coinIn: 5, coinOut: 2, readingTakeTime: 1 },
    { id: 3, coinIn: 20, coinOut: 15, readingTakeTime: 3 },
    { id: 4, coinIn: 8, coinOut: 3, readingTakeTime: 2 },
    { id: 5, coinIn: 15, coinOut: 10, readingTakeTime: 4 },
  ];

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: "#31424a" }} position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <AppsIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  INO
                </Typography>
                <div style={{ marginRight: "20px", display: "inline-flex" }}>
                  <span>
                    <Button
                      sx={btnSX}
                      style={{ margin: "10px" }}
                      color="inherit"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </span>
                </div>
                {/* <Divider orientation="vertical" /> rgb(161 5 153)
          <br /> */}
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
      </Grid>
      {/*  */}
      <Grid container>
        <Grid item xs={2}>
          <div id="viewport">
            {/* <!-- Sidebar --> */}
            <div id="sidebar">
              <header>
                <a href="#">My App</a>
              </header>
              <ul className="nav">
                <li>
                  <Link to={`/details/${items.user}`}>
                    <i className="zmdi zmdi-view-dashboard"></i>
                    view all devices
                  </Link>
                </li>
                <li>
                  <Link to={`/setting/${items.deviceId}`}>
                    <i className="zmdi zmdi-link"></i>
                    Device Setting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Grid>

        <Grid item xs={10}>
          <Table style={{ marginTop: "10px", marginLeft: "20px" }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b className={classes.thead}> Coin In </b>
                </TableCell>
                <TableCell>
                  {" "}
                  <b className={classes.thead}> Coin Out </b>
                </TableCell>
                <TableCell>
                  <b className={classes.thead}> Reading Take Time </b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.customStyle}>
              {Array.isArray(deviceData) &&
                deviceData.map((device) => (
                  <TableRow key={device.id}>
                    <TableCell className={classes.customStyle}>
                      {device.coinIn}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.coinOut}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.readingTakeTime}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      {/*  */}
    </div>
  );
}

export default DeviceDetail;
