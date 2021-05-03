import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        '&:hover': {
            color: "#D50000",
         },
    },
  }));

const CheckBox = (props) => {
    const classes = useStyles();
    return (
        <div>
           <FormControlLabel
        control={
          <Checkbox
            name={props.name}
            color="secondary"
            className={classes.root}
          />
        }
        label={props.label}
       
      />
        </div>
    )
}
export default CheckBox