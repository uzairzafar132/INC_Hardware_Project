import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import SettingsIcon from "@mui/icons-material/Settings";
import DetailsIcon from "@mui/icons-material/Details";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import axios from "axios";
import React, { useEffect } from "react";
import { createTheme } from "@mui/material/styles";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "#1717a5",
    },
  },
  row: {
    "& > *": {
      padding: "4px 16px", // adjust padding as needed
    },
  },

  thead: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    fontSize: "13px !important",
  },
  headcell: {
    paddingLeft: "16px !important",
    paddingRight: "0px !important",
    fontSize: "13px !important",
  },
  action: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    fontSize: "13px !important",
  },
  customStyle: {
    // paddingLeft: "25px !important",
    padding: "px !important",
    paddingTop: "0px !important",
    paddingRight: "0px !important",
    paddingBottom: "0px !important",
    color: "black",
    textDecoration: "none",
  },
  Iconbtn: {
    padding: "0px !important",
  },
});

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#darkgray",
              color: "#fff",
            }),
        }),
      },
    },
  },
});

const btnSX = {
  "&:hover": {
    backgroundColor: "#a9a9a9",
  },
};

function Details() {
  const classes = useStyles();
  const [items, setItems] = useState({});
  const [device, setDevice] = useState({});
  const [filteredItems, setFilteredItems] = useState({ items });
  const [Filtdevice, setFiltDevice] = useState({});

  const { id } = useParams();
  console.log(device);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/usersdata");
        setItems(response.data);
        console.log(items)
        setFilteredItems(response.data);
        console.log(items);
      } catch (error) {
        console.log(error);
      }
    };

    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/create/${id}`
        );
        setDevice(response.data);
        setFiltDevice(response.data);
        console.log("device ::" + device);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    fetchData();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = '/';
  };

const [DeviceLoc, setDeviceLoc] = useState('');

let filteredDevices;
  const handleCheckbox = (event) => {
    const checked = event.target.checked;
    if (checked) {
       filteredDevices = device.filter(
         (device) => device.location === event.target.value 
       );
    
    } else {
      setDeviceLoc("");
      filteredDevices = device;
    }
     
      setFiltDevice(filteredDevices);
      console.log(filteredDevices);
  };


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
                  <span style={{ marginTop: "10px", color: "white" }}>
                    <Button sx={btnSX}>
                      <Link
                        style={{ color: "white", textDecoration: "none" }}
                        to={`/create/${id}`}
                      >
                        create device
                      </Link>
                    </Button>
                  </span>

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
        {/*  */}
        <Grid item xs={2}>
          <div id="viewport">
            {/* <!-- Sidebar --> */}
            <div id="sidebar">
              <header>
                <a href="#">My App</a>
              </header>
              <ul className="nav">
                {Array.isArray(device) &&
                  device.map((device) => (
                    <li key={device.location}>
                      <a>
                        <i className="zmdi zmdi-link"></i> {device.location}{" "}
                        <Checkbox
                          value={device.location}
                          onChange={(event) => handleCheckbox(event)}
                        />
                      </a>
                    </li>
                  ))}

                <li>
                  <a>
                    <i className="zmdi zmdi-calendar"></i>{" "}
                    <label> Start Date</label>
                    <TextField className="px-2" id="time" type="date" />
                  </a>
                </li>
                <li>
                  <a>
                    <i className="zmdi zmdi-calendar "></i>{" "}
                    <label> End Date </label>
                    <TextField className="px-2" id="time" type="date" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        {/*  */}

        {/*  */}
        <Grid item xs={10}>
          <Table style={{ marginTop: "10px", marginLeft: "20px" }}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.headcell}>
                  <b> Location</b>
                </TableCell>
                <TableCell className={classes.thead}>
                  {" "}
                  <b> Machine_ID </b>
                </TableCell>
                <TableCell className={classes.thead}>
                  <b> Device_ID</b>
                </TableCell>
                <TableCell className={classes.thead}>
                  <b> Permanent_In</b>{" "}
                </TableCell>
                <TableCell className={classes.thead}>
                  <b> Permanent_Out </b>
                </TableCell>
                <TableCell className={classes.thead}>
                  <b> Permanent_Diff </b>
                </TableCell>
                <TableCell className={classes.thead}>
                  <b> Total_In </b>
                </TableCell>
                <TableCell className={classes.thead}>
                  <b> Total_Out </b>
                </TableCell>
                <TableCell className={classes.thead}>
                  <b> Total_Diff </b>
                </TableCell>
                <TableCell className={classes.thead}>
                  <b> Reading_Take </b>
                </TableCell>
                <TableCell className={classes.action}>
                  <b> Action </b>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody className={classes.row}>
              {Array.isArray(Filtdevice) &&
                Filtdevice.map((device) => (
                  <TableRow key={device._id}>
                    <TableCell className={classes.customStyle}>
                      {device.location}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.machineId}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.deviceId}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.permanentIn}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.permanentOut}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.permanentDiff}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.totalIn}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.totalOut}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.totalDiff}
                    </TableCell>
                    <TableCell className={classes.customStyle}>
                      {device.readingTake}
                    </TableCell>
                    <TableCell className={classes.Iconbtn}>
                      <Link to={`/device/${device.deviceId}`}>
                        <IconButton className={classes.Iconbtn}>
                          <DetailsIcon />
                        </IconButton>
                      </Link>

                      <Link to={`/setting/${device.deviceId}`}>
                       
                        <IconButton >
                          <SettingsIcon />
                        </IconButton>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Grid>
        {/*  */}
      </Grid>

      {/*  */}

      <Grid container>
        {/* <Grid item xs={12}>
          <p>{id}</p>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Details;
