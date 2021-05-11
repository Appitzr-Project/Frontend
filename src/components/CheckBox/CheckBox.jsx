const CheckBox = (props) => {
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
    </div>
    )
}
export default CheckBox