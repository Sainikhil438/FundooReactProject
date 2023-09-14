import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import List from '@mui/material/List';
//import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewListIcon from '@mui/icons-material/ViewList';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoImage from '../images/GoogleKeepLogo.png';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '60ch',
        },
    },
}));

const Header = styled(AppBar)`
      z-index: 1201;
      background: #fff;
      height: 70px;
      box-shadow: inset 0 -1px 0 0 #dadce0;
      `;


const HeaderBar = ({ open, handleDrawer }) => {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const navigate = useNavigate();
    const handleLogout = () =>{
      if(localStorage.key)
      {
        localStorage.removeItem("token")
      }
      navigate("/")
    }

    return (
        <Header open={open}>
            <Toolbar>
                <IconButton
                    // color="inherit"
                    // aria-label="open drawer"
                    onClick={handleDrawer}
                    edge="start"
                    sx={{ marginRight: '20px' }}
                >
                    <MenuIcon />
                </IconButton>
                <img src={LogoImage} alt="LogoImage"/> 
                <Typography variant="h6" noWrap component="div" color="grey">
                    Keep
                </Typography>

                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{
                            marginLeft: 0,
                        }}
                    />
                </Search>

                <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Add Account</MenuItem>
                        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                    </Menu> 

                <RefreshIcon
                    sx={{
                        marginLeft: 50,
                        color: "grey"
                    }}
                />
                <ViewListIcon
                    sx={{
                        marginLeft: 4,
                        color: "grey"
                    }} />
                <SettingsIcon
                    sx={{
                        marginLeft: 4,
                        color: "grey"
                    }} />
                <AppsIcon
                     sx={{
                        marginLeft:8,
                        color:"grey"
                     }} />


                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    sx={{
                        marginLeft: 4,
                        color: "grey"
                    }}
                >
                    <AccountCircle />
                </IconButton>

            </Toolbar>
        </Header>
    );

}
export default HeaderBar;
