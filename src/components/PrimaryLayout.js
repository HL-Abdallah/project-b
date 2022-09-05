import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Drawer, ListSubheader, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

const PrimaryLayout = () => {

    const [menuOpen, setMenuOpen] = useState(true);

    function handleMenuBtn() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar id="toolbar-appbar" sx={{ gap: 2 }}>
                    <IconButton aria-label="menu" color="inherit" onClick={() => handleMenuBtn()}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={menuOpen}
                onClose={() => { console.log("drawer closing ..") }}
            >
                <Toolbar id="toolbar-drawer" />
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Menu De Navigation
                        </ListSubheader>
                    }
                >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profil" secondary="Consulter votre profil" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <EventIcon />
                            </ListItemIcon>
                            <ListItemText primary="Evénements" secondary="Consulter tout les evénements" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Articles" secondary="Consulter tout les articles" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ManageAccountsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Parametres Utilisateurs" secondary="Gérer les comptes utilisateurs" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default PrimaryLayout