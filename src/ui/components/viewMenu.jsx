import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";

const ViewMenu = ({ title, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Open menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        {title} ▼
      </Button>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ViewMenu;
