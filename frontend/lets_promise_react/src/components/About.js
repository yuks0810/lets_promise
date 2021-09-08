import React from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const wayToSelectDataPlace = [
    {
        value: "random",
        label: 'ランダム',
    },
    {
        value: 'darts',
        label: 'ダーツ',
    },
    {
        value: 'alternate',
        label: '二人で交互に',
    },
    {
        value: 'select_from_optinos',
        label: '候補から選ぶ',
    },
];

const penalties = [
    {
        value: "payment",
        label: "罰金"
    },
    {
        value: "meal",
        label: "食事奢り"
    }
]

const textFieldStyle = {
    marginBottom: 14
}

export default function About() {
    const classes = useStyles();
    const [dateSpot, setDateSpot] = React.useState('random');
    const [penalty, setPenalty] = React.useState('payment')

    const handleChange = (e) => {

        if (e.target.id == "penalty") {
            setPenalty(e.target.value);
        }

        if (e.target.id == "wayToSelectDateSpot") {
            setDateSpot(e.target.value);
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container width="100%">
                <div>
                    <Box p={1} bgcolor="background.paper" mt={10}>
                        <div className={classes.root}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>
                                        <div>
                                            <div>
                                                <TextField
                                                    id="outlined-full-width"
                                                    className="text-field"
                                                    label="名前"
                                                    style={textFieldStyle}
                                                    fullWidth
                                                    margin="normal"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    id="wayToSelectDateSpot"
                                                    select
                                                    label="Native select"
                                                    style={textFieldStyle}
                                                    value={dateSpot}
                                                    onChange={handleChange}
                                                    SelectProps={{
                                                        native: true,
                                                    }}
                                                    variant="outlined"
                                                >
                                                    {wayToSelectDataPlace.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </TextField>
                                            </div>

                                            <div>
                                                <TextField
                                                    id="penalty"
                                                    select
                                                    label="Native select"
                                                    style={textFieldStyle}
                                                    value={penalty}
                                                    onChange={handleChange}
                                                    SelectProps={{
                                                        native: true,
                                                    }}
                                                    variant="outlined"
                                                >
                                                    {penalties.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </TextField>
                                            </div>


                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>display current state of data</Paper>
                                </Grid>
                            </Grid>
                        </div>
                    </Box>
                </div>

            </Container>
        </React.Fragment>
    );
}