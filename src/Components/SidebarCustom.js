import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SideBarItem from "./SideBarItem";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "64px",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
    docked: {
      display: "none",
    },
  }),
}));

function SideBarCustom(props) {
  const theme = useTheme();
  const open = props.open;

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open ? (
            <Typography variant="h6" component="div" className=" flex-grow">
              <img
                src="/Jakala_logo_rgb_full_neg.png"
                className="w-[133px] h-[55px] mt-3"
                alt="Logo"
              />
            </Typography>
          ) : (
            <Typography variant="h6" component="div" className=" flex-grow">
              <img
                src="/J_rgb_full_neg.png"
                className="w-[48px] h-[68px] p-1"
                alt="Logo"
              />
            </Typography>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Inbox",
            "Starred",
            "Send email",
            "Drafts",
            "All mail",
            "Trash",
            "Spam",
          ].map((text, index) => (
            <SideBarItem open={open} text={text} index={index} />
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default SideBarCustom;
