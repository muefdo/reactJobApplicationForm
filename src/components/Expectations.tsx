import { Grid, Button, TextField, FormControlLabel, Checkbox, Typography, TextFieldProps } from "@mui/material";


function Expectations() {
    return (

        <Grid item
            xs={4}
          
        >
        
            
            <Typography align="center" variant="h4" >Expectations</Typography>
            <TextField fullWidth id="outlined-basic" label="Salary expectations" variant="outlined" />
            <TextField multiline minRows={3} fullWidth id="outlined-basic" label="Additional Notes" variant="outlined" />



        </Grid>

    );
}


export default Expectations;

