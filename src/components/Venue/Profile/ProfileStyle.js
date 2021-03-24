import { makeStyles } from "@material-ui/core/styles";
export const useStyle = makeStyles(() => ({
    inputLabel: {
      fontSize: "16px",
      fontWeight: "400",
      marginBottom: "5px",
    },
    formControl: {
      marginBottom: "20px",
    },
  
    input: {
      background: "#f3f3f3",
      borderRadius: "5px",
      padding: "20 15px"
    },
  
    startIcon:{ 
      backgroundColor: '#E4E4E4',
      marginLeft: '-9px',
      padding: "9px 13px",
      width: "47px",
      color: '#A3A3A3' 
    },
  
    submitBtn: {
      backgroundColor: "#20D3C2",
      borderRadius: "18px",
      height: "71px",
      fontSize: "18px",
      fontWeight: "600",
      color: "#fff",
      marginTop: "20px",
      "&:hover": {
        backgroundColor: "#20D3C2",
      },
    },
  
    qrcode :{
      margin: "60px 0 30px 0"
    },
  
    sendEmail:{
      fontWeight: "600",
      fontSize: "15px",
      color: "#540174",
      cursor: "pointer",
      textDecoration : "underline"
    },

    select: {
      padding: '12px 10px'
    }

  }));