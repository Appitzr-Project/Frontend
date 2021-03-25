import React, { forwardRef } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const InputForm = forwardRef((props, ref) => {
  const {
    value,
    label,
    name,
    type,
    onChange,
    min
  } = props

  const classes = useStyle({ value })

  return (
    <div className={classes.formGroup}>
      <Typography
        gutterBottom
        className={classes.label}
      >
        {label}
      </Typography>
      <input
        name={name}
        type={type}
        className={classes.input}
        ref={ref}
        {...{min}}
        value={value}
        onChange={onChange}
      />
    </div>
  )
})

const useStyle = makeStyles((theme) => ({
  label: {
    color: value => value !== '' ? '#464646' : '#3f51b5',
    fontSize: '16px',
    fontWeight: '400',
    [theme.breakpoints.down('xs')] : {
      fontSize: '3.5vw'
    }
  },
  input: {
    background: '#f3f3f3',
    borderRadius: '10px',
    width: '100%',
    border: 0,
    outline: 0,
    boxShadow: 'none',
    padding: '12px',
    marginBottom: '8px',
    '&:focus': {
      border: '2px solid #3f51b5'
    }
  }
}))

export default InputForm
