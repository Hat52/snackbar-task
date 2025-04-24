import React from "react";
import {
  Snackbar,
  SnackbarContent,
  IconButton,
  Typography,
  Box,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomSnackbar({ open, onClose,content,onLike }) {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={onClose}
    >
      <SnackbarContent
        style={{
          backgroundColor: "#1C1C22",
          borderRadius: 8,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          padding: "12px 16px",
          minWidth: "300px",
        }}
        message={
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" gap={8}>
            <Box>
              <Typography variant="body1" style={{ color: "#fff", fontWeight: 500 }}>
                {content?.name || "--"}
              </Typography>
              <Typography variant="body2" style={{ color: "#cfcfcf" }}>
              {content?.email || "--"}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={4}>
              <Button
                onClick={()=>onLike(data)}
                style={{ color: "#81E6D9", fontWeight: 600, cursor: "pointer" }}
              >
                LIKE
              </Button>
              <IconButton onClick={onClose} size="small">
                <CloseIcon style={{ color: "#cfcfcf" }} />
              </IconButton>
            </Box>
          </Box>
        }
      />
    </Snackbar>
  );
}
