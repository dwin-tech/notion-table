import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { useSelector, useDispatch } from "react-redux";
import style from "./drawer.module.scss";
import { changeToggleNewDrawer } from "../../features/tableDataInfo/tableDataInfoSlice";

export default function CreateNewDrawer() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { toggleNewDrawer, currentRowForDrawer } = useSelector(
    (store) => store.tableDataInfo
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(changeToggleNewDrawer(open));
  };

  const newItemCreater = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 700 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem key={text} disablePadding />
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <button
          className={style.new_button}
          type="submit"
          onClick={() => {
            dispatch(changeToggleNewDrawer(true));
          }}
        >
          New
        </button>
        <Drawer
          anchor="right"
          open={toggleNewDrawer}
          onClose={() => {
            dispatch(changeToggleNewDrawer(false));
          }}
        >
          {newItemCreater("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
