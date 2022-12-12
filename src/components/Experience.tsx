import { Grid, Button, TextField, FormControlLabel, Checkbox, Typography, TextFieldProps, Stack, FormControl } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



function Experience() {

  const [isChecked, setIsChecked] = useState<boolean>(false)

  const [value, setValue] = useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };


  return (

    <Grid item container
      xs={12}
      spacing={2}
    >

      <Grid item xs={12}>
        <Typography align="center" variant="h4" >Experience</Typography>
      </Grid>


      <Grid item xs={12} >


        <TextField fullWidth id="outlined-basic" label="Şirket İsmi" variant="outlined" />

        {/*<TextField fullWidth id="outlined-basic" label="Başlangıç yılı" variant="outlined" */}
        {/*<TextField fullWidth id="outlined-basic" label="Bitiş yılı" variant="outlined" />*/}

      </Grid>

      <Grid item xs={12} >
        <FormControl fullWidth>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DesktopDatePicker

              label="Başlangıç Tarihi"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            /></LocalizationProvider>
        </FormControl>
      </Grid>

      <Grid item xs={12} >
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              disabled={isChecked}
              label="Bitiş Tarihi"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            /></LocalizationProvider>
        </FormControl>
      </Grid>


      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox onClick={() => {
            setIsChecked(!isChecked)
          }} />} label="Hala Çalışıyorum" />


      </Grid>


    </Grid>
  );
}


export default Experience;











