import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import Wrapper from "../shared/Wrapper";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  btnMO: {
    borderRadius: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 25px",
    marginBottom: "30px",
  },
}));

const MenuOption = () => {
  const classes = useStyle();
  console.log(useHistory());
  return (
    <>
      <Wrapper
        title="Venue Dashboard"
        image="https://source.unsplash.com/random"
      >
        <Link to="/venue/profile">
          <Button variant="outlined" fullWidth className={classes.btnMO}>
            <span style={{ fontSize: "18px" }}>Profile</span>
            <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
          </Button>
        </Link>

        <Button variant="outlined" fullWidth className={classes.btnMO}>
          <span style={{ fontSize: "18px" }}>Orders</span>
          <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
        </Button>

        <Button variant="outlined" fullWidth className={classes.btnMO}>
          <span style={{ fontSize: "18px" }}>Menu</span>
          <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
        </Button>

        <Link to="/venue/reviews">
          <Button variant="outlined" fullWidth className={classes.btnMO}>
            <span style={{ fontSize: "18px" }}>Reviews</span>
            <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
          </Button>
        </Link>

        <Button variant="outlined" fullWidth className={classes.btnMO}>
          <span style={{ fontSize: "18px" }}>Discount</span>
          <ArrowForwardIosIcon style={{ fontSize: "12px" }} />
        </Button>
      </Wrapper>
    </>
  );
};

export default MenuOption;
