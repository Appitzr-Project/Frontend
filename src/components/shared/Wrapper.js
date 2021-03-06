import React from "react";
import { Container } from "@material-ui/core";

import useStyle from "../../style";
import Header from "./Header";

const Wrapper = (props) => {
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="sm" className={classes.wrapper}>
        <header className={classes.wrapHeader}>
          <Container>
            <Header {...props} />
          </Container>
        </header>
        <main className={classes.wrapMain}>{props.children}</main>
      </Container>
    </>
  );
};

export default Wrapper;
