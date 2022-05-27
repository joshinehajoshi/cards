import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function DateComp() {
  return (
    <Stack component="form" spacing={3}>
    <TextField
      id="datetime-local"
      label="Project End Date"
      type="datetime-local"
      defaultValue="2022-05-24T10:30"
      sx={{ width: 250 }}
      inputProps={{
        step: 300, // 5 min
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </Stack>
  )
}

export default DateComp