import { makeStyles } from "@material-ui/core/styles";
export const useStyle = makeStyles(() => ({
    fieldText: {
      marginTop: '40px',
    },
    fieldUsername:{
      marginTop: '20px',
    },
    buttonConfirmation: {
      marginTop: '40px',
      background: 'linear-gradient(90deg, #63D9D2 0%, #4F147B 101.53%)',
      borderRadius: '15px',
      height: '58px',
      marginBottom: '10px',
      fontSize: '16px'
    },
    buttonLabelConfirmation: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }))