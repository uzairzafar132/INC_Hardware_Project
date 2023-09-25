import React from "react";
import { useParams, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "material-design-iconic-font/dist/css/material-design-iconic-font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { TextField, Button } from "@mui/material/";
import axios from "axios";
import Navbar from "../Navbar";

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
    paddingLeft: "8px !important",
    padding: "25px !important",
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

function DeviceSetting() {
  const [deviceData, setDeviceData] = useState({
    location: "",
    machineId: "",
    deviceId: "",
    permanentIn: 0,
    permanentOut: 0,
    permanentDiff: 0,
    totalIn: 0,
    totalOut: 0,
    totalDiff: 0,
    readingTake: "",
  });

  const { id } = useParams();
  const [items, setItems] = useState({});

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  console.log("iddd" + id)
  const handleSubmit = async (e) => {
   
  }
  const handleChange = (e) => {
    setDeviceData({
      ...deviceData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/usersdata/${id}`
        );
        setItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
              </ul>
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>
          <form onSubmit={handleSubmit} style={{ marginLeft: "30px" }}>
            <TextField
              style={{ margin: "10px" }}
              name="Coin1"
              label="Coin 1$"
              value={deviceData.location}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="Coin5"
              label="Coin 5$"
              value={deviceData.machineId}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="Coin10"
              label="Coin 10$"
              value={deviceData.deviceId}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="Coin20"
              label="Coin 20$"
              value={deviceData.permanentIn}
              onChange={handleChange}
              type="number"
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="Coin50"
              label="Coin 50$"
              value={deviceData.permanentOut}
              onChange={handleChange}
              type="number"
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="Coin100"
              label="Coin 100$"
              value={deviceData.permanentDiff}
              onChange={handleChange}
              type="number"
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              sx={btnSX}
              style={{ backgroundColor: "#31424a", margin: "10px" }}
            >
              save Device
            </Button>
          </form>
        </Grid>
      </Grid>
      {/*  */}
    </div>
  );
}

export default DeviceSetting;
