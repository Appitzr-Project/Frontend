// import { lazy } from 'react'

// export const Add = lazy(() => import('./add'))
// export const View = lazy(() => import('./view'))

import React from 'react'
import { Card, Container, makeStyles } from '@material-ui/core'
import NavBar from '../../NavBar'
import { IMSpaghetti } from './assets'
import { SendButton, MenuCard } from './components'

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
  return (
    <Container
      classes={{ root: classes.containerRoot }}
      maxWidth='sm'
      disableGutters
    >
      <NavBar title='Menu' />
      <Card classes={{ root: classes.cardRoot }} elevation={0}>
        <MenuCard />
      </Card>
      <SendButton />
    </Container>
  )
}

export default MenuList
