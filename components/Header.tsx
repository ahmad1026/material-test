import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Fab } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Stack direction={"column"} alignItems={"center"}>
              <Typography variant="h6" component="div">
                my Skils within
              </Typography>
              <Typography variant="h3">Matrial UI</Typography>
            </Stack>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Toolbar>
        </AppBar>
      </Box>
  )
}
