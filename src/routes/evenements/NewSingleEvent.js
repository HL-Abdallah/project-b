import {
    Paper, StepLabel, Stepper, Step, Typography,
    IconButton, createTheme, Button, StepContent, TextField
} from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

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
                <Typography variant="h4" ml={2}>
                    Creating a new event
                </Typography>
                <IconButton disableRipple >
                    <AddIcon />
                </IconButton>
            </div>

            <Stepper
                orientation="vertical"
                activeStep={activeStep}
            >
                <Step>
                    <StepLabel>Basic Information</StepLabel>
                    <StepContent>
                        <TextField
                            label="Event Title"
                            fullWidth
                        />
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Event Body</StepLabel>
                    <StepContent>
                        <TextField
                            label="Title"
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
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: theme.palette.grey[100],
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
        </div>
    )
}

export default NewSingleEvent