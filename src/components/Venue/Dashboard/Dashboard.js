import React from "react";
import {
  Container,
  Grid,
  Typography,
  NativeSelect,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Header from "../../shared/Header";
import Chart from "./Chart";
import DashboardCard from "./DashboardCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  dashboardContainer: {
    backgroundColor: "#0E1439",
    minHeight: "100vh",
    color: "#fff",
  },

  select :{
    height: "30px",
    border: "1px solid black",
    color: "#20D3C2",
    background: "#10294B",
    padding: "10px",
    borderRadius: "10px",
  }

}));

const Dashboard = () => {
  const classes = useStyle();
  const [age, setAge] = React.useState("week");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container maxWidth="sm" className={classes.dashboardContainer}>
      <Header isBack title="Dashboard" />

      <Grid container style={{ marginTop: "20px" }} justify="space-between">
        <Typography variant="h6">Week ending</Typography>

        <NativeSelect
          value={age}
          onChange={handleChange}
          className={classes.select}
        >
          <option value="week">week</option>
          <option value="month">month</option>
        </NativeSelect>
      </Grid>

      <Grid container style={{ marginTop: "20px" }}>
        <Chart />
      </Grid>

      <Grid container style={{ marginTop: "20px" }} justify="space-between">
        <Typography>Recent orders</Typography>
        <ExpandMoreIcon />
      </Grid>

      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </Container>
  );
};

export default Dashboard;
