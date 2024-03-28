import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
} from "@mui/material";

function Taskbar() {
  const [duration, setDuration] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setDuration(event.target.value as string);
  };
  return (
    <div className="flex items-center justify-between py-2 px-6 border-b border-gray-500">
      <div className="flex gap-6 items-center">
        <div className="flex gap-2">
          <FileUploadOutlinedIcon sx={{ color: "gray" }} />
          <span>Keep Local Path</span>
        </div>
        <FormGroup>
          <FormControlLabel
            control={<Switch size="small" defaultChecked />}
            label="Auto Sync"
          />
        </FormGroup>
        <div className="w-40">
          <Select
            id="duration"
            size="small"
            value={duration}
            variant="outlined"
            label="duration"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={15}>15 mins</MenuItem>
            <MenuItem value={20}>20 mins</MenuItem>
            <MenuItem value={30}>30 mins</MenuItem>
          </Select>
        </div>
        <CachedIcon sx={{ color: "gray" }} />
      </div>
      <SearchBar />
    </div>
  );
}

export default Taskbar;
