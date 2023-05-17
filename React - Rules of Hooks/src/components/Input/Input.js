import classes from './Input.module.css'

const Input = (props)=>{
    return(
        <div
          className={`${classes.control} ${
            props.State.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor={props.htmlFor}>E-Mails</label>
          <input
            type={props.type}
            id={props.id}
            value={props.State.value}
            onChange={props.ChangeHandler}
            onBlur={props.validateHandler}
          />
        </div>
    )
}

export default Input;