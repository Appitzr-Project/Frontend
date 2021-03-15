import { Box, TextField } from '@material-ui/core';
import React from 'react';

const InputField = () => {
  return (
    <Box p="20px 0">
      <TextField
        id="guest-count"
        label="Amount of people"
        type="number"
        min={1}
        fullWidth
      />
    </Box>
  );
};

export default InputField;
