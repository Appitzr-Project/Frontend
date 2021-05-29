import { createUseStyles } from 'react-jss'


export const useStyles = createUseStyles({
    box_general: {
      borderRadius: '5px' ,
      marginBottom: '25px' ,
      backgroundColor: '#fff' ,
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.2)' ,
      padding: '30px'
    },
    fieldLocation:{
      '& input': {
        paddingLeft: '42px'
      },
      '& .icon_pin_alt':{
        position: 'absolute' ,
        padding: '12px' ,
        background: '#fff' ,
        top: '23px' ,
        left: '0px' ,
        borderRadius: '2px 0 0 2px' ,
        border: '1px solid #d2d8dd'
      }
    }
  })