import React from "react";
import InputBase from "@mui/material/InputBase";
import { Button, IconButton, TextField } from "@mui/material";
import Box from "@mui/system/Box";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        label="Search"
        id="search"
        sx={{ borderBottomRightRadius: 0 }}
      />
      <Button
        variant="contained"
        sx={{ p: "15px", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
      >
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchBar;
