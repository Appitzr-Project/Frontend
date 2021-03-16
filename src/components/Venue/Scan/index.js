import React from 'react';
import Wrapper from "../../shared/Wrapper";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({

}));

const VenueScan = () => {
  const classes = useStyle();

  return (
    <Wrapper
        title="Venue Dashboard"
        image="https://source.unsplash.com/random"
        isBack
    >
      Venue Scan
    </Wrapper>
  )
}

export default VenueScan;
