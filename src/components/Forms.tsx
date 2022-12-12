import { Grid, Button, TextField, FormControlLabel, Checkbox, Typography, TextFieldProps } from "@mui/material";
import React, { useState } from "react";
import Expectations from "./Expectations";
import Experience from "./Experience";
import Personal from "./Personal";


function Forms() {
    const [experiences, setExperiences] = useState([
        <Experience />

    ])

    const example = [1, 2, 3]
    example.map(a => a)
    console.log([
        ...example,
        4, 5
    ])
    return (
        <Grid container
            spacing={2}
            sx={{
                display: "flex",
                alignItems: "flex-start"

            }}

        >

            <Personal />
            <Grid item container
                xs={4}
                spacing={2}
            >
                {experiences.map(x => x)}
            </Grid>


            <Expectations />




            <Grid item xs={12}>

                <Button className="addExp" variant="contained" onClick={() => {

                    setExperiences([
                        ...experiences,
                        <Experience />

                    ])
                }

                }>Deneyim ekle</Button>

            </Grid>

        </Grid>


    );
}


export default Forms;

