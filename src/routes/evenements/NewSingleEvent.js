import {
    Paper, StepLabel, Stepper, Step, Typography,
    createTheme, Button, StepContent, TextField
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import NewEventStep1 from './NewEvent_Step1';


const NewSingleEvent = () => {
    // Hooks & state
    const theme = createTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const navigate = useNavigate();
    // handlers

    return (
        <Paper elevation={2} sx={{ p: 3, height: "100%" }} >
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: "center",
                marginBottom: theme.spacing(2)
            }}>
                <Button sx={{ m: 1 }} onClick={() => navigate("/events")}>⬅ GO Back</Button>
                <Typography variant="h4" ml={2} sx={{ borderBottom: "2px solid #333" }}>
                    Creating a new event
                </Typography>
            </div>

            <Stepper
                orientation="vertical"
                activeStep={activeStep}
            >
                <Step>
                    <StepLabel>Basic Information</StepLabel>
                    <StepContent>
                        <NewEventStep1 />
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Event Body</StepLabel>
                    <StepContent>
                        <TextField
                            label="Body"
                            multiline
                            rows={12}
                            fullWidth
                        />
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Finalise</StepLabel>
                    <StepContent>
                    </StepContent>
                </Step>
            </Stepper>
            <StepSwitcher activeStep={activeStep} setActiveStep={setActiveStep} />
        </Paper>
    )
}

const StepSwitcher = ({ activeStep, setActiveStep }) => {

    const theme = createTheme();

    return (
        <Paper elevation={4} style={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "5px",
            margin: theme.spacing(1),
            padding: theme.spacing(1),
        }}>
            <Button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => prev - 1)}
                variant="outlined"
            >
                Back
            </Button>
            <div>
                {activeStep !== 2 ? (
                    <Button
                        disabled={activeStep === 2}
                        onClick={() => setActiveStep(prev => prev + 1)}
                        variant="outlined"
                    >
                        Next
                    </Button>)
                    : (<Button>Finish</Button>)}
            </div>
        </Paper>
    )
}

export default NewSingleEvent