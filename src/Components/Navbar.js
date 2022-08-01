import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#AD1457" }}>
        <Toolbar>
          <Typography variant="h4">PhotoBooth</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
