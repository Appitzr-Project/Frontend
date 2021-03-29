import React, {useEffect, useState} from 'react'
import { Card, Container, makeStyles } from '@material-ui/core'
import NavBar from '../../NavBar'
import { IMSpaghetti } from './assets'
import { SendButton, MenuCard } from './components'
import { useParams, useHistory } from "react-router-dom"
import {getAllProductsByVenueId} from "../../../redux/api/products.api"
import {getVenueById} from "../../../redux/api/venue.api"


const useStyles = (img) =>
  makeStyles({
    containerRoot: {
      background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
    },
    cardRoot: {
      padding: '24px 24px 140px 24px',
      marginTop: '24px',
      borderRadius: '50px 50px 0 0',
      minHeight: "100vh"
    }
  })

const MemberOrderMenu = () => {
  const classes = useStyles(IMSpaghetti)()
  const [items, setItems] = useState([])
  const [venue, setVenue] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    let isActive = true;
    const http = async () => {
        if(params.idVenue){
            try {
                setLoading(true);
                const res = await getAllProductsByVenueId(params.idVenue);
                const venueData = await getVenueById(params.idVenue);
                if(isActive){
                    console.log(res.data);
                    setItems(res.data);
                    setVenue(venueData.data);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }else{
            history.push("/");
        }
    }
    http();

    return () => {
        isActive=false;
    }
  },[]);

  return !loading ? (
    <Container
      classes={{ root: classes.containerRoot }}
      maxWidth='sm'
      disableGutters
    >
      <NavBar title='Menu' />
      <Card classes={{ root: classes.cardRoot }} elevation={0}>
        <MenuCard items={items} venue={venue} />
      </Card>
      <SendButton />
    </Container>
  ):"Loading..."
}

export default MemberOrderMenu