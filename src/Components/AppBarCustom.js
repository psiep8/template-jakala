import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideBarCustom from "../Components/SidebarCustom";
import LeftIcon from "@mui/icons-material/ChevronLeft";
import RightIcon from "@mui/icons-material/ChevronRight";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import sidebarSlice, { sidebarActions } from "../feature/sidebar/sidebarSlice";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  marginLeft: 50,
  width: `calc(100% - 50px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function AppBarCustom() {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.sidebar.value);
  const open = () => {
    dispatch(sidebarActions.open());
  };
  const close = () => {
    dispatch(sidebarActions.close());
  };

  return (
    <>
      <AppBar position="fixed" open={isDrawerOpen}>
        <Toolbar>
          <IconButton
            onClick={isDrawerOpen ? close : open}
            className="text-white"
          >
            {isDrawerOpen ? <LeftIcon /> : <RightIcon />}
          </IconButton>
          <IconButton size="large" edge="start" className="text-white ml-auto">
            <p className="text-base mr-4 font-raleway">Andrea Ravasio</p>
            <AccountCircleIcon></AccountCircleIcon>
          </IconButton>
        </Toolbar>
      </AppBar>

      <SideBarCustom open={isDrawerOpen} />
      <div className=" mt-16 w-full"></div>
    </>
  );
}

export default AppBarCustom;
