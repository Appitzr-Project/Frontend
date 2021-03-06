import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import Wrapper from "../shared/Wrapper";
import useStyle from "../../style";
import StarIcon from "@material-ui/icons/Star";
import ListReview from "./ListReview";

const Reviews = () => {
  const classes = useStyle();
  return (
    <>
      <Wrapper title="Reviews" isBack>
        {/* review statistic */}
        <Typography variant="h1" align="center" className={classes.rating}>
          4.3
        </Typography>
        <Typography align="center">
          <StarIcon htmlColor="#FF7F23" />
          <StarIcon htmlColor="#FF7F23" />
          <StarIcon htmlColor="#FF7F23" />
          <StarIcon htmlColor="#FF7F23" />
          <StarIcon htmlColor="#969696" />
        </Typography>
        <Typography variant="h6" align="center" style={{ color: "#515151" }}>
          Based on 23 Reviews
        </Typography>

        {/* star statistic */}
        {[
          { star: 5, count: "85%" },
          { star: 4, count: "10%" },
          { star: 3, count: "5%" },
          { star: 2, count: "0%" },
          { star: 1, count: "0%" },
        ].map((d) => (
          <Grid container style={{ marginTop: "13px" }} key={d.star}>
            <Grid item xs={2}>
              <Typography style={{ fontSize: "11px", fontWeight: "700" }}>
                {d.star} star
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <div
                style={{
                  background: "#FF7F23",
                  width: d.count,
                  height: "14px",
                  borderRadius: "15px",
                  margin: "2px 0",
                }}
              ></div>
            </Grid>
            <Grid item xs={1}>
              <Typography style={{ fontSize: "11px", fontWeight: "700" }}>
                {d.count}
              </Typography>
            </Grid>
          </Grid>
        ))}

        {/* reviews next-prev action */}
        <Grid
          container
          style={{ marginTop: "26px", display: "flex", alignItems: "center" }}
        >
          <Grid item xs={7}>
            <Button
              className={classes.pnBtn}
              variant="contained"
              style={{ marginRight: "12px" }}
            >
              Prev
            </Button>
            <Button
              className={classes.pnBtn}
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </Grid>

          <Grid item xs={5}>
            <Typography
              align="right"
              style={{ fontSize: "14px", fontWeight: "400" }}
            >
              1-10 of 157 Reviews
            </Typography>
          </Grid>
        </Grid>
        {/* reviews comment */}
        <ListReview />
        <ListReview />
        <ListReview />
      </Wrapper>
    </>
  );
};

export default Reviews;
