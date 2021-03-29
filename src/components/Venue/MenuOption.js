import React, {useState} from "react";
import { Button, Modal, Backdrop, Fade, Grid, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link , useHistory } from "react-router-dom";
import Wrapper from "../shared/Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import { signOutAction } from "../../redux/actions/auth.action";
import { useDispatch } from 'react-redux'

const useStyle = makeStyles((theme) => ({
  btnMO: {
    borderRadius: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 25px",
    marginBottom: "30px",
    textTransform: "capitalize"
  },

  textMenu:{
    fontSize: "18px",
    fontWeight: "600",
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    width: "260px",
    backgroundColor: "#fff",
    padding: "13px",
    borderRadius: "5px",
  },

  logoutText: {
    fontSize: "18px",
    fontWeight: "600"
  },
  
  Xbtn: {
    fontSize: "18px",
    fontWeight: "400", 
    color: "#717171",
    cursor: "pointer"
  },

  confirmText: {
    color: "#717171",
    fontSize: "16px",
    fontWeight: "300", 
    padding: "10px 0 20px 0"
  },

  cancelBtn: {
    backgroundColor: "#EBEBEB",
    border: "#EBEBEB",
    color: "#C1C1C1",
    width: "90px",
    height: "40px",
  },

  okBtn: {
    backgroundColor: "#FF4646",
    border: "#FF4646",
    color: "#fff",
    width: "90px",
    height: "40px",
    "&:hover": {
      backgroundColor: "#FF4646",
    }
  }
}));

const MenuOption = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onLogout = () => {
    dispatch(signOutAction()).then(() => {
      history.push('/login')
      setOpen(false)
    })
  }

  return (
    <>
      <Wrapper
        title="Venue Dashboard"
        image="https://source.unsplash.com/random"
      >
        <Link to="/venue/dashboard">
          <Button variant="outlined" fullWidth className={classes.btnMO}>
            <span className={classes.textMenu}>Dashboard</span>
            <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
          </Button>
        </Link>

        <Link to="/venue/profile">
          <Button variant="outlined" fullWidth className={classes.btnMO}>
            <span className={classes.textMenu}>Profile</span>
            <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
          </Button>
        </Link>

        <Link to="/venue/scan">
          <Button variant="outlined" fullWidth className={classes.btnMO}>
            <span className={classes.textMenu}>Scan</span>
            <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
          </Button>
        </Link>

        <Link to="/venue/orders">
          <Button variant="outlined" fullWidth className={classes.btnMO}>
            <span className={classes.textMenu}>Orders</span>
            <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
          </Button>
        </Link>

        <Link to="/venue/menu/list">
          <Button variant="outlined" fullWidth className={classes.btnMO}>
            <span className={classes.textMenu}>Menu</span>
            <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
          </Button>
        </Link>
        
        <Link to="/venue/reviews">
          <Button variant="outlined" fullWidth className={classes.btnMO}>
            <span className={classes.textMenu}>Reviews</span>
            <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
          </Button>
        </Link>

        <Button variant="outlined" fullWidth className={classes.btnMO} onClick={() => window ? (window.location.href = '/venue/discount') : {}}>
          <span className={classes.textMenu}>Discount</span>
          <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
        </Button>

        <Button variant="outlined" fullWidth className={classes.btnMO} onClick={handleOpen} >
          <span className={classes.textMenu}>Logout</span>
          <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
        </Button>
        
        {/* modal */}
          <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 300,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Grid container flexDirection="column">
                
                <Grid container item justify="space-between">
                  <Typography className={classes.logoutText}>Logout</Typography>
                  <div className={classes.Xbtn} onClick={handleClose}>X</div>
                </Grid>

                <Grid container item justify="space-between">
                  <Typography className={classes.confirmText}>Are you sure you want to logout now?</Typography>
                </Grid>

                <Grid container item justify="space-between">
                  <Button variant="outlined" color="inherit" className={classes.cancelBtn} onClick={handleClose}>Cancel</Button>
                  <Button variant="outlined" color="inherit" className={classes.okBtn} onClick={onLogout} >OK</Button>
                </Grid>

              </Grid>
            </div>
          </Fade>
        </Modal>
        {/* end-modal */}
      </Wrapper>

    </>
  );
};

export default MenuOption;
