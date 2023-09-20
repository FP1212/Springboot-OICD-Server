import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useDispatch } from "react-redux";
import { Tooltip, IconButton, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function SimpleListMenu({ options, action, title }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);

    dispatch(action({ filterKey: options[index].status }));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {title}
      <IconButton onClick={handleClickListItem}>
        <MoreVertIcon sx={{ fill: "#484e5a" }} />
      </IconButton>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          "role": "listbox",
        }}>
        {options.map((option, index) => (
          <MenuItem
            key={option.title}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
