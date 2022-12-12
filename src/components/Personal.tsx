import { Grid, Button, TextField, FormControlLabel, Checkbox, Typography, TextFieldProps, styled } from "@mui/material";




export default function Personal(props: any) {
    return (

        <Grid item container 
            spacing={2}
           
            xs={4}
          
        >


            

                <Grid item 
                xs={12}>
                <Typography align="center" variant="h4" >Personal information</Typography>
                </Grid>
                
                <Grid item 
                xs={12}>
                <TextField fullWidth id="outlined-basic" label="İsim" variant="outlined" />
                </Grid>
                
                <Grid item 
                xs={12}>
                <TextField fullWidth id="outlined-basic" label="Soyisim" variant="outlined" />
                </Grid>
               
                <Grid item 
                xs={12}>
                <TextField fullWidth id="outlined-basic" label="Doğum Tarihi" variant="outlined" />
                </Grid>
            

        </Grid>
    );
}




