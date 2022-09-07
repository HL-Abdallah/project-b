import { Avatar, Divider, Paper, Typography, Stack, IconButton, Grid } from '@mui/material'
import React from 'react'
import peoples from "../data/fakeProfiles"
import EditIcon from '@mui/icons-material/Edit';

const Profil = () => {

  const elon = peoples.filter(p => p.name.startsWith("Elon"))[0];

  return (
    <>
      <Paper sx={{ p: 4, m: 1 }} elevation={2}>
        <TopSection person={elon} />
        <Divider />
        <MiddleSection person={elon} />
      </Paper>
    </>
  )
}

export default Profil

const TopSection = ({ person }) => {
  return (
    <>
      <Stack flexDirection={"row"} sx={{ mb: 3 }}>
        <Avatar alt={person.name} src={person.imageURL} sx={{ width: "150px", height: "150px" }} />
        <Stack sx={{ flexGrow: 1, justifyContent: "space-between", pl: 3 }} >
          <Typography variant="h3" component='h3' color="primary" sx={{ fontWeight: "bold" }}>{person.name}</Typography>
          <div>
            <Typography variant="caption" color="inheri">{person.isActive ? "Compte Actif" : "Compte Bloqué"}</Typography>
            <Typography sx={{ mt: 1 }} variant="subtitle2">{person.location}</Typography>
          </div>
        </Stack>
        <IconButton sx={{ height: "40px" }}>
          <EditIcon />
        </IconButton>
      </Stack>
    </>
  )
}

const MiddleSection = ({ person }) => {
  return (
    <>
      <Grid container sx={{ p: 4 }} spacing={1}>
        <Grid item xs={12} sm={4}>
          <Typography variant='button' sx={{ fontWeight: "bold" }}>Email</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant='body1' align="right">{person.email}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='button' sx={{ fontWeight: "bold" }}>Née Le</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant='body1' align="right">{person.birthday.toLocaleDateString()}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='button' sx={{ fontWeight: "bold" }}>Inscris depuis</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant='body1' align="right">{person.dateCreated.toLocaleString()}</Typography>
        </Grid>
      </Grid>
    </>
  )
}