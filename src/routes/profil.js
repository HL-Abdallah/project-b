import { Avatar, Divider, Paper, Typography, Stack, IconButton } from '@mui/material'
import React from 'react'
import peoples from "../data/fakeProfiles"
import EditIcon from '@mui/icons-material/Edit';

const Profil = () => {

  const elon = peoples.filter(p => p.name.startsWith("Elon"))[0];

  return (
    <>
      <Paper sx={{ p: 4, m: 1 }} elevation={4}>
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
        <Avatar alt={person.name} src={person.imageURL} sx={{ width: "200px", height: "200px" }} />
        <Stack sx={{ flexGrow: 1, justifyContent: "space-between", p: 4 }} >
          <Typography variant="h3" color="primary">{person.name}</Typography>
          <div>
            <Typography variant="body1" color="inheri">{person.isActive ? "✅ Compte Actif" : "❌ Compte Bloqué"}</Typography>
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
      <Paper sx={{ mt: 3 }}>

      </Paper>
    </>
  )
}