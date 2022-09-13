import { Button } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import events from "../../data/fakeEvents";

const SingleEvent = () => {

  const { event_id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null)

  useEffect(() => {
    const x = events.filter(event => event.id === event_id);
    setEvent(x);
  }, [event_id])

  return (
    <>
      <Button sx={{ m: 1 }} onClick={() => navigate("/events")}>⬅ GO Back</Button>
      <h1>Consult Event : {event_id}</h1>
      <div>{JSON.stringify(event)}</div>
    </>
  )
}

export default SingleEvent