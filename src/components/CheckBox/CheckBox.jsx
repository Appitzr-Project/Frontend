import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core"

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '&:hover': {
//             color: "#D50000",
//          },
//     },
//   }));

const CheckBox = (props) => {
    // const classes = useStyles();
    return (
        <div className='col-sm-9 d-flex flex-wrap ' >
      <div className="form-check mr-2" >
            <input
              className="form-check-input"
              type="Checkbox"
              name={props.name}
              id={props.id}
              />
          <label className="form-check-label" htmlFor={props.id}>
             {props.title}
          </label>
      </div>
      <div className="form-check mr-7" >
          <label className="form-check-label" htmlFor={props.id}>
            <small>{props.qty}</small>
          </label>
    </div>
    </div>
    )
}
export default CheckBox