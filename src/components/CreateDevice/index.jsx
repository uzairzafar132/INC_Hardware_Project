import { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material/";
import axios from "axios";
import Navbar from "../Navbar";
import { useParams, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const btnSX = {
  "&:hover": {
    backgroundColor: "#a9a9a9 !important",
  },
};

const CreateDevice = () => {
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
  const [items, setItems] = useState({});

  const { id } = useParams();
  console.log("id in create device :"+id)
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/api/create/${id}`,
        deviceData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
   const handleLogout = () => {
     localStorage.removeItem("token");
     window.location = "/";
   };

  const handleChange = (e) => {
    setDeviceData({
      ...deviceData,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <Box>
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
                  <span style={{ marginTop: "15px" }}>
                    <Link
                      style={{
                        margin: "10px",
                        textDecoration: "none",
                        color: "white",
                      }}
                      sx={btnSX}
                      color="inherit"
                      to={`/details/${id}`}
                    >
                      View All Devices
                    </Link>
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
      <Grid container>
        <Grid
          item
          sx={8}
          style={{ margin: "0px", padding: "30px 100px 100px " }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              style={{ margin: "10px" }}
              name="location"
              label="Location"
              value={deviceData.location}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="machineId"
              label="Machine ID"
              value={deviceData.machineId}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="deviceId"
              label="Device ID"
              value={deviceData.deviceId}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="permanentIn"
              label="Permanent In"
              value={deviceData.permanentIn}
              onChange={handleChange}
              type="number"
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="permanentOut"
              label="Permanent Out"
              value={deviceData.permanentOut}
              onChange={handleChange}
              type="number"
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="permanentDiff"
              label="Permanent Diff"
              value={deviceData.permanentDiff}
              onChange={handleChange}
              type="number"
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="totalIn"
              label="Total In"
              value={deviceData.totalIn}
              onChange={handleChange}
              type="number"
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="totalOut"
              label="Total Out"
              value={deviceData.totalOut}
              onChange={handleChange}
              type="number"
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="totalDiff"
              label="Total Diff"
              value={deviceData.totalDiff}
              onChange={handleChange}
              type="number"
              fullWidth
            />
            <TextField
              style={{ margin: "10px" }}
              name="readingTake"
              label=""
              value={deviceData.readingTake}
              type="date"
              onChange={handleChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              sx={btnSX}
              style={{ backgroundColor: "#31424a", margin: "10px" }}
            >
              Create Device
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateDevice;
