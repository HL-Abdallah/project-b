import { Button } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import ReactEditor from '../components/editorJS/ReactEditor';
import events from '../data/fakeEvents'

const EditSingleEvent = () => {

    const {event_id} = useParams();
    const navigate = useNavigate();

    const [event, setEvent] = useState(null)

    useEffect(() => {
      const x = events.filter(event => event.id == event_id );
      setEvent(x);
    },[])
    
  return (
    <>
    <Button onClick={() => navigate("/evenement")}>⬅ GO Back</Button>
    <h1>Edit Event : {event_id}</h1>
    <ReactEditor/>
    </>
  )
}

export default EditSingleEvent