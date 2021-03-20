import { makeStyles } from "@material-ui/core/styles";
export const useStyle = makeStyles(() => ({
    fieldText: {
      marginTop: '40px',
    },
    buttonLogin: {
      marginTop: '40px',
      background: 'linear-gradient(90deg, #63D9D2 0%, #4F147B 101.53%)',
      borderRadius: '15px',
      height: '58px',
      marginBottom: '10px',
      fontSize: '16px'
    },
    buttonLoginFB: {
      marginTop: '20px',
      background: '#3B5998',
      borderRadius: '15px',
      height: '58px',
      fontSize: '16px',
      textTransform: 'none'
    },
    buttonLoginGoogle: {
      marginTop: '20px',
      background: '#C94130',
      borderRadius: '15px',
      height: '58px',
      fontSize: '16px',
      textTransform: 'none'
    },
    buttonLabelLogin: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }))