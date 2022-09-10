import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Drawer, ListSubheader, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Stack, Tooltip, useTheme } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Box } from '@mui/system'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { darkTheme, lightTheme } from '../styles/myTheme';


const PrimaryLayout = ({ changeTheme }) => {

    const theme = useTheme();
    const [menuOpen, setMenuOpen] = useState(true);

    function handleMenuBtn() {
        setMenuOpen(!menuOpen);
    }
    function handleThemeChange() {
        const newTheme = theme.palette.mode === 'light' ? darkTheme : lightTheme;
        changeTheme(newTheme);
    }
    const drawerWidth = 278;

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ gap: 2, display: "flex", justifyContent: "flex-start" }}>
                    <IconButton aria-label="menu" color="inherit" onClick={() => handleMenuBtn()}>
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">
                        <Typography variant="h6">
                            Dashboard
                        </Typography>
                    </Link>
                    <Tooltip sx={{ marginLeft: 'auto' }} title={"Thème Clair / Thème Sombre"} arrow>
                        <IconButton color="inherit" onClick={() => handleThemeChange()}>
                            {theme.palette.mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={menuOpen}
                PaperProps={{ sx: { width: `${drawerWidth}px` } }}
            >
                <Toolbar id="toolbar-drawer" />
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Menu De Navigation
                        </ListSubheader>
                    }
                >
                    <Link to='/profile'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profil" secondary="Consulter votre profil" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to='/evenement'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <EventIcon />
                                </ListItemIcon>
                                <ListItemText primary="Evénements" secondary="Consulter tout les evénements" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to='/article'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArticleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Articles" secondary="Consulter tout les articles" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to='/parametresUtilisateur'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ManageAccountsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Parametres Utilisateurs" secondary="Gérer les comptes utilisateurs" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Stack alignItems={'flex-end'} id="router-outlet-wrapper" sx={{ height: "100%" }}>
                <Toolbar />
                <Box
                    sx={{
                        width: `${menuOpen ? `calc( 100% - ${drawerWidth}px )` : '100%'}`,
                        height: "100%"
                    }}>
                    <Outlet />
                </Box>
            </Stack>
        </div>
    )
}

export default PrimaryLayout