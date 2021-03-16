import { makeStyles, withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';

const VariantListItemText = withStyles(() => ({
  root: {
      marginTop: 0,
      marginBottom: 0
  },
  primary: {
    marginBottom: 1
  }
}))(ListItemText);

const useStyles = makeStyles({
    root: {
      borderRadius: 15,
      boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
      border: '1px solid #E1E1E1'
    },
    cardContent:{
        padding: 0
    },
    listitemOutbox: {
      paddingTop: 0,
      paddingBottom: 0
    },
    title: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 14,
      paddingRight: 14,
      paddingLeft: 14,
      paddingBottom: 20,
      backgroundColor: '#F0F0F0',
      fontSize: 16,
      fontWeight: 700
    },
    orderDate: {
      color: '#7B7B7B',
      fontWeight: 400,
      fontSize: 14,
      textAlign: 'right'
    },
    amountTitle: {
      fontWeight:600
    },
    foodName: {
      color: '#7B00AB',
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 5
    },
    itemVariantPrice: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 600,
      fontSize: 14,
      color: '#0E0E0E',
      marginBottom: 5,
      '& span:last-child':{
        paddingRight: 38
      }
    },
    itemTotalPerVariant: {
      fontSize: 14,
      color: '#0E0E0E'
    },
    subTotalContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      '& span:last-child':{
        fontWeight: 700,
        fontSize: 18
      }
    },
    discountContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      '& span:last-child':{
        fontWeight: 700,
        fontSize: 20
      }
    },
    totalContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 700,
      fontSize: 18,
      color: 'white',
      backgroundColor: '#02A1F3',
      height: 52,
      alignItems: 'center',
      padding: 10,
      borderRadius: 5,
      '& span:last-child':{
        fontSize: 22
      }
    },
    outBoxTotal: {
      paddingRight: 8,
      paddingLeft: 8
    },
    orderActionContainer: {
      marginTop: 82,
      marginBottom: 82,
    },
    orderAction: {
      width: 125,
      height: 125,
      fontSize: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      color: 'white',
      backgroundColor: '#11B151'
    }
})

export {
  VariantListItemText
}

export default useStyles