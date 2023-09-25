import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import SendIcon from "@mui/icons-material/Send";
import Checkbox from "@mui/material/Checkbox";
import Navbar from "../Navbar";
import React, { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";
import "material-design-iconic-font/dist/css/material-design-iconic-font.css";
import { FormControl, TextField } from "@mui/material";
import { useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import  './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import io from "socket.io-client";
import Chatbot from "../Chatbot";



const socket = io.connect("http://localhost:8080/");
const theme = createTheme({
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          padding:"0px",
          fontSize: "1rem",
        },
      },
    },
  },
});




const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "#1717a5",
    },
    row: {
      "& > *": {
        padding: "4px 16px", // adjust padding as needed
      },
    },
  },
  customStyle: {
    // paddingLeft: "25px !important",
    padding: "25px !important",
    paddingTop: "5px !important",
    paddingBottom: "5px !important",
    color: "black",
    textDecoration: "none",
  },
  thead: {
    // paddingLeft: "25px !important",
    fontSize: "larger !important",
  },
});

const btnSX = {
  "&:hover": {
    backgroundColor: "#0e0e78",
  },
};


function Home() {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    password: "",
    phoneNumber: "",
    userType: "admin",
  });
 
  
  const [items, setItems] = useState({});
  const [filteredItems, setFilteredItems] = useState({items});
  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [Sopen, setSopen] = useState(false);
  const [Copen, setCopen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const messagesEndRef = useRef(null);

  const handleCOpen = () => {
    setCopen(true);
  };

    const handleSOpen = () => {
      setSopen(true);
    };

    const handleSClose = () => {
      setOpen(false);
    };

    // const handleSearch = (event) => {
    //   
    // };


  	const handleSubmit = async (e) => {
      e.preventDefault();

      console.log(data);
      try {
        const url = "http://localhost:8080/api/usersdata";
        const { data: res } = await axios.post(url, data);
        window.location = "/";
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
         
        }
      }
    };

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/usersdata");
      setItems(response.data);
      setFilteredItems(response.data);
      console.log(filteredItems);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, []);
  

  console.log(checkedItems);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
    setCheckedItems(event.target.checked ? items : []);
  };

  const handleCheckboxChange = (event, item) => {
    if (event.target.checked) {
      setCheckedItems([...checkedItems, item]);
    } else {
      setCheckedItems(
        checkedItems.filter((checkedItem) => checkedItem._id !== item._id)
      );
    }
  };

  const handleDelete = (index) => {
    console.log(index._id);
    const id = index._id;

    axios
      .delete(`http://localhost:8080/api/usersdata/${id}`)
      .then((response) => {
        
         window.location = "/";
        // Handle successful response
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
      });
  };

  const openDialog = (item) => {
    setData(item);
    setOpen2(true);
  };



  const handleEdit = async (index) => {
    const id = index._id;

         try {
        const url = `http://localhost:8080/api/usersdata/${id}`;
        const { data: res } = await axios.put(url, data);
        console.log(res.data);
        window.location = "/";
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
         
        }
      }
   
  };


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  
  	const handleTypeChange = (event) => {
      setData((prevData) => ({
        ...prevData,
        userType: event.target.value,
      }));
      // console.log(data);
    };

    const handleAdminButtonClick = (event) => {
      event.preventDefault();
      const adminItems = items.filter((item) => item.userType === "admin");
      console.log(adminItems); // This will log the items that have userType === "admin"
       setFilteredItems(adminItems);
    };

    const handleVendorButtonClick = (event) => {
      event.preventDefault();
      const vendorItems = items.filter((item) => item.userType === "vendor");
      console.log(vendorItems); // This will log the items that have userType === "vendor"
       setFilteredItems(vendorItems);
    };
    const handleShowAll = (event) => {
        event.preventDefault();
      setFilteredItems(items);
    };

      const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
     setSearchText(event.target.value);
     if(event.target.value){
      const SearchItems = items.filter((item) => item.name === searchText);
      setFilteredItems(SearchItems);
     }else{
      setFilteredItems(items);
     }
      
     console.log(searchText)
    }
  };

  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
       // Add event listener for "response" event from server
       socket.on("adminmessage", (data) => {
        setOutput((prev) => {
            if (!prev.includes(data)) {
              return [...prev, data];
            } else {
              return prev;
            }
        });
         handleCOpen(true);
       });
  }, []);

    // useEffect(() => {
    //   // Add event listener for "response" event from server
    //   socket.on("response", (data) => {
    //     setOutput((prev) => [...prev, data]);
    //     handleCOpen(true);
    //   });
    // }, []);
  
  const handleChatbot = (e) => {
    e.preventDefault();
    // Send user input to server
    socket.emit("adminmessage", input);
    setOutput((prev) => [...prev, `You: ${input}`]);
    setInput("");
  };
    
    
    useEffect(() => {
      // Scroll to bottom of div whenever new data is added
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, [output]);



  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {" "}
          <Navbar />
        </Grid>

        <Grid item xs={12} style={{ backgroundColor: "rgb(57 74 82)" }}>
          <IconButton
            onClick={handleSOpen}
            style={{ margin: "10px", marginLeft: "20px" }}
            aria-label="ControlPointOutlined"
            sx={{ color: "white" }}
          >
            <SearchIcon />
          </IconButton>
          {Sopen && (
            <TextField
              sx={{ m: 0.5 }}
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              onBlur={handleClose}
              autoFocus
              onKeyDown={handleKeyDown}
            />
          )}
          <div
            style={{
              alignContent: "center",
              margin: "15px",
              float: "right",
              display: "flex",
            }}
          >
            <span style={{ marginRight: "80px" }} sx={{ color: "white" }}>
              {" "}
              <Pagination count={3} color="primary" />
            </span>
            <span
              style={{
                backgroundColor: "rgb(144 125 145)",
                padding: "10px",
                position: "absolute",
                right: "0px",
                top: "99px",
                marginTop: "5px",
              }}
            >
              <IconButton
                onClick={handleClickOpen}
                aria-label="ControlPointOutlined"
                sx={{ color: "white" }}
              >
                <ControlPointIcon />
              </IconButton>
            </span>
          </div>
        </Grid>
      </Grid>
      {/* // */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form className={styles.abc} onSubmit={handleSubmit}>
          <Grid container className={styles.contain}>
            <Grid style={{ width: "400px" }} item xs={4}>
              <Typography
                style={{
                  paddingLeft: "40px",
                  paddingTop: "40px",
                  fontSize: "23px",
                }}
                variant="h5"
                color="white"
                alignContent="center"
              >
                Add a new Item
              </Typography>

              <span
                style={{
                  position: "relative",
                  top: "120px",
                  left: "30px",

                  margin: "3px",
                }}
              >
                <Button
                  style={{ margin: "5px" }}
                  type="submit"
                  variant="contained"
                  onClick={handleClose}
                >
                  close
                </Button>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </span>
            </Grid>
            <Grid item xs={8}>
              <Box
                className={styles.formcontrol}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <FormControl sx={{ m: 1 }}>
                  <TextField
                    type="name"
                    value={data.name}
                    onChange={handleChange}
                    style={{ backgroundColor: "white" }}
                    name="name"
                    id="margin-dense"
                    margin="dense"
                    variant="outlined"
                    label="Name"
                  />
                  <TextField
                    type="password"
                    className={styles.text}
                    value={data.password}
                    onChange={handleChange}
                    fullWidth
                    id="fullWidth" // paddingLeft: "25px !important",
                    margin="dense"
                    name="password"
                    label="Password"
                    style={{ backgroundColor: "white" }}
                  />
                  <TextField
                    className={styles.text}
                    value={data.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                    id="fullWidth"
                    margin="dense"
                    name="phoneNumber"
                    label="Phone Number"
                    style={{ backgroundColor: "white" }}
                  />

                  <div>
                    <label>User Type</label>
                    <select value={data.userType} onChange={handleTypeChange}>
                      <option name="admin" value="admin">
                        Admin
                      </option>
                      <option name="vendor" value="vendor">
                        Vendor
                      </option>
                    </select>
                  </div>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Dialog>

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
                  <a onClick={handleShowAll}>
                    <i className="zmdi zmdi-view-dashboard"></i> Show All
                  </a>
                </li>
                <li>
                  <a onClick={handleAdminButtonClick}>
                    <i className="zmdi zmdi-link"></i> Admin
                  </a>
                </li>
                <li>
                  <a onClick={handleVendorButtonClick}>
                    <i className="zmdi zmdi-widgets"></i> Vendor
                  </a>
                </li>
              </ul>
              {/* <div>
                <h1>Chatbot</h1>
                <div>
                  {output.map((msg, index) => (
                    <div key={index}>{msg}</div>
                  ))}
                </div>
                <form onSubmit={handleChatbot}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button type="submit">Send</button>
                </form>
              </div> */}
            </div>
          </div>
        </Grid>

        <Grid item xs={10}>
          <Table style={{ marginTop: "10px", marginLeft: "20px" }}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.customStyle}>
                  <Checkbox
                    className={classes.thead}
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                </TableCell>
                <TableCell className={classes.customStyle}>
                  <b className={classes.thead}> Name </b>
                </TableCell>
                <TableCell className={classes.customStyle}>
                  {" "}
                  <b className={classes.thead}> Phone Number </b>
                </TableCell>
                <TableCell className={classes.customStyle}>
                  <b className={classes.thead}> User Type</b>
                </TableCell>
                <TableCell className={classes.customStyle}>
                  <b className={classes.thead}> View Details</b>{" "}
                </TableCell>
                <TableCell className={classes.customStyle}>
                  <b className={classes.thead}> Actions </b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(filteredItems) &&
                filteredItems.map((item) => (
                  <ThemeProvider theme={theme}>
                    <TableRow key={item._id} className={classes.row}>
                      <TableCell className={classes.customStyle}>
                        <Checkbox
                          checked={checkedItems.some(
                            (checkedItem) => checkedItem._id === item._id
                          )}
                          onChange={(event) =>
                            handleCheckboxChange(event, item)
                          }
                        />
                      </TableCell>
                      <TableCell className={classes.customStyle}>
                        {item.name}
                      </TableCell>
                      <TableCell className={classes.customStyle}>
                        {item.phoneNumber}
                      </TableCell>
                      <TableCell
                        className={classes.customStyle}
                        style={{
                          color: item.userType === "admin" ? "red" : "green",
                        }}
                      >
                        {item.userType}
                      </TableCell>
                      <TableCell className={classes.customStyle}>
                        <Link to={`/details/${item._id}`}>View Detail</Link>
                      </TableCell>

                      <TableCell className={classes.customStyle}>
                        <IconButton
                          style={{ padding: "2px" }}
                          onClick={() => openDialog(item)}
                          aria-label="ControlPointOutlined"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          style={{ padding: "2px" }}
                          onClick={() => handleDelete(item)}
                          aria-label="ControlPointOutlined"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </ThemeProvider>
                ))}
            </TableBody>
          </Table>
          <div
            style={{
              position: "fixed",
              right: "20px",
              bottom: "20px",
              float: "right",
              height: "100px",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <IconButton onClick={handleCOpen}>
              <ChatRoundedIcon
                style={{
                  position: "",
                  top: "px",
                  bottom: "100px",
                  right: "26px",
                }}
              />
            </IconButton>
            <div>
              {output.map((msg, index) => (
                <div
                  style={{
                    color: msg.includes("user") ? "brown" : "",
                    paddingLeft: "20px",
                  }}
                  key={index}
                >
                  {msg}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {Copen && (
              <form style={{ position: "" }} onSubmit={handleChatbot}>
                <TextField
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  value={input}
                  hiddenLabel
                  id="filled-hidden-label-small"
                  defaultValue="Small"
                  variant="filled"
                  size="small"
                />

                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </form>
            )}
          </div>
        </Grid>
      </Grid>
      {/*  */}

      {/*  */}
      <Dialog
        open={open2}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form className={styles.abc}>
          <Grid container className={styles.contain}>
            <Grid style={{ width: "400px" }} item xs={4}>
              <Typography
                style={{
                  paddingLeft: "50px",
                  paddingTop: "40px",
                  fontSize: "25px",
                }}
                variant="h5"
                color="white"
                alignContent="center"
              >
                Update Item
              </Typography>

              <span
                style={{
                  position: "relative",
                  top: "120px",
                  left: "30px",

                  margin: "3px",
                }}
              >
                <Button
                  style={{ margin: "5px" }}
                  type="submit"
                  variant="contained"
                  onClick={handleClose}
                >
                  close
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={() => handleEdit(items)}
                >
                  Update
                </Button>
              </span>
            </Grid>
            <Grid item xs={8}>
              <Box
                className={styles.formcontrol}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <FormControl sx={{ m: 1 }}>
                  <TextField
                    type="name"
                    value={data.name}
                    onChange={handleChange}
                    style={{ backgroundColor: "white" }}
                    name="name"
                    id="margin-dense"
                    margin="dense"
                    variant="outlined"
                    label="Name"
                  />
                  <TextField
                    type="password"
                    className={styles.text}
                    value={data.password}
                    onChange={handleChange}
                    fullWidth
                    id="fullWidth"
                    margin="dense"
                    name="password"
                    label="Password"
                    style={{ backgroundColor: "white" }}
                  />
                  <TextField
                    className={styles.text}
                    value={data.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                    id="fullWidth"
                    margin="dense"
                    name="phoneNumber"
                    label="Phone Number"
                    style={{ backgroundColor: "white" }}
                  />

                  <div>
                    <label>User Type</label>
                    <select value={data.userType} onChange={handleTypeChange}>
                      <option name="admin" value="admin">
                        Admin
                      </option>
                      <option name="vendor" value="vendor">
                        Vendor
                      </option>
                    </select>
                  </div>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Dialog>

      {/*  */}
    </div>
  );
}

export default Home;
