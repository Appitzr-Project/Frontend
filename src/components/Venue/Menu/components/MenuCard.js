import React from 'react'
import {
  Grid,
  FormControl,
  Select,
  withStyles,
  InputBase,
  MenuItem
} from '@material-ui/core'
import MenuList from "./MenuList"

const SelectInput = withStyles((theme) => ({
  input: {
    borderRadius: 13,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    borderColor: '#FF3974',
    color: '#59495F',
    '&:focus': {
      borderRadius: 13
    }
  }
}))(InputBase)

const MenuCard = ({items}) => {
  return items.length ?  (
    <Grid container spacing={0} direction='column'>
      <Grid spacing={0} item xs={12} style={{ marginBottom: 16 }}>
        <Grid item xs={12} container justify='space-between' alignItems='center'>  
          <p>Showing {items.length} Foods</p>
          <FormControl variant='outlined'>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              defaultValue='Dessert'
              onChange={(e) => (
                e.target.value
              )}
              label='category'
              input={<SelectInput />}
            >
              <MenuItem value={'Dessert'}>Dessert</MenuItem>
              <MenuItem value={'Sphagetti'}>Sphagetti</MenuItem>
              <MenuItem value={'Drink'}>Drink</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {items.map((item, index) => <MenuList item={item} index={index} key={index} /> )}
    </Grid>
  ):"You don't have a menu yet"
}

export default MenuCard
