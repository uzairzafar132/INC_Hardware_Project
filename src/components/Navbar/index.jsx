import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
import AppsIcon from "@mui/icons-material/Apps";

//#2c2cb3

const btnSX = {
  "&:hover": {
    backgroundColor: "#a9a9a9",
  },
};


export default function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };


  return (
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
          <div style={{ marginRight: "20px", display: "grid" }}>
            <span style={{ marginTop: "15px" }}>
              <h5>Uzair Zafar</h5>
            </span>

            <span
              style={{
                marginTop: "px",
              }}
            >
              <Button
                style={{ position: "relative", left: "14px" }}
                sx={btnSX}
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
  );
}
