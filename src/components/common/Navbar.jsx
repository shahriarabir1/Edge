import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import React from "react";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

const Navbar = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#507687",
          flexGrow: "1",
          paddingY: "20px",
          width: "100%",
        }}
      >
        <Box
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: "20px",
            maxWidth: "full",
          }}
        >
          {/* Left Section - Logo */}
          <Box
            sx={{ display: "flex", alignItems: "center", paddingLeft: "120px" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontStyle: "italic",
              }}
            >
              EDGE
            </Typography>
          </Box>
          {/* Center Section - Icons */}
          <Box
            sx={{
              display: "flex",
              gap: "100px",
              alignItems: "center",
            }}
          >
            <IconButton sx={{ color: "white" }} href="/">
              <HouseOutlinedIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} href="/about">
              <AssistantPhotoIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} href="/contact">
              <PermContactCalendarIcon />
            </IconButton>
          </Box>
          {/* Right Section - Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              paddingRight: "120px",
              justifyContent: "flex-end", // Align buttons to the right
            }}
          >
            <Button
              variant="contained"
              href="/login"
              color="success"
              sx={{ color: "white" }}
            >
              Login
            </Button>
            <Button variant="contained" href="/registration">
              Registration
            </Button>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
