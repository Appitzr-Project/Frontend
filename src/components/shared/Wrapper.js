import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    background: "#fff",
    padding: "0",
  },
  wrapHeader: {
    background: "linear-gradient(90deg, #5263C8 0%, #303C83 100%)",
    minHeight: "180px",
    maxHeight: "180px",
  },
  wrapMain: {
    minHeight: "606px",
    background: theme.palette.background.paper,
    padding: props => props.spacing ? props.spacing : '50px 24px',
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    marginTop: "-50px",
  },
}));

const Wrapper = (props) => {
  const classes = useStyle(props);
  return (
    <>
      <Container maxWidth="sm" className={classes.wrapper}>
        <header className={classes.wrapHeader}>
          <Container>
            <Header {...props} />
            {/* <Typography variant='subtitle2' gutterBottom>
                tes
            </Typography> */}
          </Container>
        </header>
        <main className={classes.wrapMain}>{props.children}</main>
      </Container>
    </>
  );
};

export default Wrapper;
