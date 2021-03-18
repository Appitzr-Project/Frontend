import { Box, Button, Card, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../../NavBar';
import RightSVG from './assets/chevron-right.svg';
import ProfPic from './assets/pic.png';

const useStyles = (img) =>
  makeStyles({
    containerRoot: {
      background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
    },
    cardRoot: {
      padding: '32px 24px 0 24px',
      marginTop: '24px',
      borderRadius: '50px 50px 0 0',
      height: 'calc(100vh - 105px)',
      minHeight: '600px',
    },
    bgPercentage: {
      backgroundColor: '#40F27C',
      height: '87px',
      minWidth: '86px',
    },
    discountCard: {
      borderRadius: '15px',
      boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
    },
    buttonAdd: {
      textTransform: 'none',
      backgroundColor: '#313D84',
      color: '#FFFFFF',
    },
  });

const DiscountList = () => {
  const classes = useStyles()();

  return (
    <>
      <Container
        classes={{ root: classes.containerRoot }}
        maxWidth="sm"
        disableGutters
      >
        <NavBar title="Discount List" src={ProfPic} />
        <Card classes={{ root: classes.cardRoot }} elevation={0}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box fontSize="20px" fontWeight="600px" color="#565656">
              All Discount
            </Box>

            <Box>
              <Button
                variant="contained"
                className={classes.buttonAdd}
                onClick={() =>
                  window ? (window.location.href = '/venue/discount/add') : {}
                }
              >
                Add Discount
              </Button>
            </Box>
          </Box>

          {Array.from({ length: 3 }).map((d, index) => (
            <Box key={index} pt="32px">
              <Card
                className={classes.discountCard}
                elevation={0}
                onClick={() =>
                  window ? (window.location.href = '/venue/discount/edit') : {}
                }
              >
                <Box display="flex" flexDirection="row">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    className={classes.bgPercentage}
                  >
                    <Box>10%</Box>
                    <Box>Off</Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    flexGrow={1}
                    pl="10px"
                  >
                    <Box fontSize="16px" fontWeight="600">
                      GiftDay {2021 - index}
                    </Box>
                    <Box fontSize="16px" color="#7B7B7B">
                      1 Mar {2021 - index} - 3 Mar {2021 - index}
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    pr="27px"
                  >
                    <img alt="right" src={RightSVG} />
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Card>
      </Container>
    </>
  );
};

export default DiscountList;
