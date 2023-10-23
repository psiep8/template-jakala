import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function SideBarItem(props) {
  return (
    <>
      <ListItem key={props.text} disablePadding className="block">
        <ListItemButton
          className="min-h-[48px] px[2.5px]"
          sx={{
            justifyContent: props.open ? "initial" : "center",
          }}
        >
          <ListItemIcon
            className="min-w-0 justify-center text-white"
            sx={{
              mr: props.open ? 3 : "auto",
            }}
          >
            {props.icons[props.index]}
          </ListItemIcon>
          <ListItemText
            primary={props.text}
            className=" text-white"
            sx={{ opacity: props.open ? 1 : 0 }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default SideBarItem;
