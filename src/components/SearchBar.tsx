import React from "react";
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

function SearchBar() {
  return (
    <Box>
      <FormControl
        sx={{ m: 1, width: "400px", borderRadius: 0 }}
        variant="outlined"
      >
        <OutlinedInput
          size="small"
          id="search"
          placeholder="Scene Name/Job ID"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "gray" }} />
            </InputAdornment>
          }
          inputProps={{
            "aria-label": "search",
          }}
        />
      </FormControl>
    </Box>
  );
}

export default SearchBar;
