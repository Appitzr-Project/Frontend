import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Avatar,
  Badge,
  TextField,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import useStyle from "../../../style";

const ListReview = () => {
  const classes = useStyle();
  const [showReply, setShowReply] = useState(false);

  return (
    <Grid container spacing={2} className={classes.listReview}>
      <Grid item xs={2} onClick={() => setShowReply(false)}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt=""
            src="https://source.unsplash.com/random"
            className={classes.sizeAvatar}
          />
        </div>
      </Grid>
      <Grid item xs={10}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: "700", fontSize: "14px" }}
          >
            John Doe
          </Typography>
          <Typography style={{ fontSize: "11px", fontWeight: "400" }}>
            4 Days ago
          </Typography>
        </div>
        <Typography
          style={{
            display: "flex",
            alignItem: "center",
            fontSize: "11px",
          }}
        >
          <StarIcon fontSize="small" htmlColor="#FF7F23" />
          <StarIcon fontSize="small" htmlColor="#FF7F23" />
          <StarIcon fontSize="small" htmlColor="#FF7F23" />
          <StarIcon fontSize="small" htmlColor="#FF7F23" />
          <span
            style={{ marginTop: "4px", marginLeft: "6px", fontWeight: "700" }}
          >
            4.0
          </span>
        </Typography>

        <Typography style={{ fontSize: "11px", fontWeight: "400 " }}>
          This cozy restaurant has left the best impressions! Hospitable hosts,
          delicious dishes, beautiful presentation, wide wine list and wonderful
          dessert.
        </Typography>

        {showReply ? (
          <>
            <TextField
              className={classes.replyInput}
              multiline
              rows={2}
              fullWidth
              variant="outlined"
            />
            <Button variant="contained" className={classes.replyBtn}>
              Reply
            </Button>
          </>
        ) : (
          <Badge
            onClick={() => setShowReply(true)}
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "15px",
              float: "right",
              color: "#5263C8",
              cursor: "pointer",
            }}
            color="primary"
          >
            Reply
          </Badge>
        )}
      </Grid>
    </Grid>
  );
};

export default ListReview;
