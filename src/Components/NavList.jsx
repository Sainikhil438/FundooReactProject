import * as React from 'react';
//import { styled, useTheme } from '@mui/material/styles';
//import Box from '@mui/material/Box';
//import MuiDrawer from '@mui/material/Drawer';
//import MuiAppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
//import CssBaseline from '@mui/material/CssBaseline';
//import Typography from '@mui/material/Typography';
//import Divider from '@mui/material/Divider';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
//import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';




const NavList = ({setNotesType}) => {
    return(
        <List>
          {['Notes', 'Remainder', 'Edit', 'Archive', 'Trash'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              > */}
                <ListItemIcon
                //   sx={{
                //     minWidth: 0,
                //     mr: open ? 3 : 'auto',
                //     justifyContent: 'center',
                //   }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}

                  {index % 5 === 0 ? <LightbulbOutlinedIcon onClick={()=> setNotesType("Notes")}/> :
                      index % 4 === 1 ? <NotificationsNoneOutlinedIcon/> :
                        index % 4 === 2 ? <EditOutlinedIcon /> :
                          index % 4 === 3 ? <ArchiveOutlinedIcon onClick={()=> setNotesType("Archive")}/> :
                            index % 4 === 0 ? <DeleteOutlineOutlinedIcon onClick={()=>setNotesType("Trash")}/> : ""}

                </ListItemIcon>
                <ListItemText primary={text} 
                // sx={{ opacity: open ? 1 : 0 }} 
                />
              {/* </ListItemButton> */}
            </ListItem>
          ))}
        </List>
    )
}

export default NavList;