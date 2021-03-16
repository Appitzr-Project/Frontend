import React from 'react';
import { Container, Grid } from '@material-ui/core';
import useStyles from './indexStyle';
import { VariantListItemText  } from './indexStyle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const OrderDetail = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Container >
            <Grid container direction='column'>
                <Card className={classes.root}>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.title} component="h2">
                            <span>#Tony Ross</span>
                            <span className={classes.orderDate}>5-march-2021, 19:54 PM</span>
                        </Typography>
                        <div>
                            <List dense={false}>
                                <ListItem divider className={classes.listitemOutbox}>
                                    <ListItemText
                                        primary={<span className={classes.amountTitle}>Amount of People</span>}
                                        secondary='4'
                                    />
                                </ListItem>
                                <ListItem divider>
                                    <VariantListItemText
                                        primary={<span className={classes.foodName}>Spaghetti</span>}
                                        secondary={
                                            <React.Fragment>
                                                <span className={classes.itemVariantPrice}>
                                                    <span>Medium Spicy Spaghetti</span>
                                                    <span>$43</span>
                                                </span>
                                                <span className={classes.itemTotalPerVariant}>1 item $43</span>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem divider>
                                    <VariantListItemText
                                        primary={<span className={classes.foodName}>Deserts</span>}
                                        secondary={
                                            <React.Fragment>
                                                <span className={classes.itemVariantPrice}>
                                                    <span>Ice Cream Cone</span>
                                                    <span>$30</span>
                                                </span>
                                                <span className={classes.itemTotalPerVariant}>1 item $43</span>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <span className={classes.subTotalContainer}>
                                                <span>Sub Total</span>
                                                <span>$73</span>
                                            </span>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <span className={classes.discountContainer}>
                                                <span>Discount</span>
                                                <span>-</span>
                                            </span>
                                        }
                                    />
                                </ListItem>
                                <ListItem className={classes.outBoxTotal}>
                                    <ListItemText
                                        primary={
                                            <span className={classes.totalContainer}>
                                                <span>Total payment</span>
                                                <span>$73</span>
                                            </span>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </div>
                    </CardContent>
                </Card>

                <Grid container className={classes.orderActionContainer} justify="center">
                    <div className={classes.orderAction}>
                        <span>
                            Placed
                            {/* or Done */}
                        </span>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrderDetail;
