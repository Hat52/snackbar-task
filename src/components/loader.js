import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const Loader = ({ text = "Loading..." }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(255, 255, 255, 0.8)",
        zIndex: 1300, // higher than modals
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
      <Typography variant="body1" sx={{ mt: 2, color: "#333" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Loader;
