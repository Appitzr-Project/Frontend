import React, { useState, useEffect} from 'react'
import { Card, Container, makeStyles } from '@material-ui/core'
import NavBar from '../../NavBar'
import { IMSpaghetti } from './assets'
import { SendButton, MenuCard } from './components'
import axios from "axios"
import { useSelector }  from "react-redux"

const useStyles = (img) =>
  makeStyles({
    containerRoot: {
      background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
    },
    cardRoot: {
      padding: '24px 24px 140px 24px',
      marginTop: '24px',
      borderRadius: '50px 50px 0 0'
    }
  })

const MenuList = () => {
  const classes = useStyles(IMSpaghetti)()
  const auth = useSelector(state => state.auth)
  const [items, setItems] = useState([])

  useEffect(()=>{
    let isActive = true
    axios.get("https://api.dev.appetizr.co/products/venue",
    {
      headers:{
        Authorization: auth.user.signInUserSession.idToken.jwtToken
      }
    })
    .then(res=>{
      if(isActive){
        setItems(res.data.data)
      }
    }).catch(err => {
      console.log(err)
    })

    return () => {
      isActive=false;
    }
  },[auth.user.signInUserSession.idToken.jwtToken])

  return (
    <Container
      classes={{ root: classes.containerRoot }}
      maxWidth='sm'
      disableGutters
    >
      <NavBar title='Menu' />
      <Card classes={{ root: classes.cardRoot }} elevation={0}>
        <MenuCard items={items} />
      </Card>
      <SendButton />
    </Container>
  )
}

export default MenuList
