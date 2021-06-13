const CheckBox = (props) => {
    return (
    <div className='col-sm-9 d-flex flex-wrap ' >
      <div className="form-check mr-2" >
            <input
              className="form-check-input category-options"
              type="Checkbox"
              name={props.name}
              id={props.id}
              // onClick={(e) => console.log("klik",e.target.checked, e.target.value)}
              value={props.title}
              // onChange={(e) => console.log(e,"change")}
              />
          <label className="form-check-label" htmlFor={props.id}>
             {props.title}
          </label>
      </div>
    </div>
    )
}
export default CheckBox