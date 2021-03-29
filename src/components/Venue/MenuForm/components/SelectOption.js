import React from "react";
import {
  FormControl,
  Select,
  withStyles,
  InputBase,
  MenuItem,
  Typography,
} from "@material-ui/core";

const SelectInput = withStyles((theme) => ({
  input: {
    borderRadius: 13,
    position: "relative",
    backgroundColor: "#f3f3f3",
    fontSize: 16,
    padding: "12px",
    color: "#59495F",
    "&:focus": {
      borderRadius: 10,
      border: "2px solid #3f51b5",
    },
  },
}))(InputBase);

const SelecOption = (props) => {
  const { label, className, data, onHandleChange, inputName, currentValue } = props;
  return (
    <>
      <Typography gutterBottom className={className}>
        {label}
      </Typography>
      <FormControl variant="outlined" style={{ minWidth: "100%" }}>
        <Select
          labelId="demo-simple-select-outlined-label"
          name={inputName}
          id="demo-simple-select-outlined"
          defaultValue={label === "category" ? "dessert" : "vegan"}
          onChange={(e) => onHandleChange(e)}
          label="category"
          value={currentValue}
          input={<SelectInput />}
        >
          {data.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelecOption;
