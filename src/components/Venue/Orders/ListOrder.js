import React from 'react';
import { AppBar, Container, Tabs, Tab, Grid, IconButton, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyle from './listOrderStyle';

const orderData = [
    {
        price: '$443',
        qty: 3,
        title: 'Tony Ross',
        updatedAt: '5-march-2021, 19:54 PM'
    },
    {
        price: '$678',
        qty: 5,
        title: 'John Cena',
        updatedAt: '5-march-2021, 19:54 PM'
    },
    {
        price: '$225',
        qty: 2,
        title: 'liliana west',
        updatedAt: '5-march-2021, 19:54 PM'
    },
    {
        price: '$225',
        qty: 2,
        title: 'Asep',
        updatedAt: '5-march-2021, 19:54 PM'
    }
]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


const ListOrders = () => {
    const classes = useStyle();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container >
            <AppBar position='static' color='transparent' className={classes.appBar}  >
                <Tabs value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    classes={{ indicator: classes.indicatorColor }}
                    aria-label='simple tabs example'>
                    <Tab label='On Progress' {...a11yProps(0)} classes={{ root: classes.textColor , selected: classes.selected }} />
                    <Tab label='Completed' {...a11yProps(1)} classes={{ root: classes.textColor , selected: classes.selected }} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Grid container direction='column'  >
                    <br />
                    {orderData.map((order, key) => (
                        <Grid key={key} container direction='row' className={classes.order} >
                            <Grid container item direction='column' justify='center' alignItems='center' className={classes.headOrder + ' ' + classes.orderOnProgress } >
                                <Typography className={classes.headOrderPrice} >{order.price}</Typography>
                                <Typography className={classes.headOrderItem} >{order.qty} Items</Typography>
                            </Grid>
                            <Grid item container xs alignItems='center' justify='center' direction='row' >
                                <Grid item direction='column' xs spacing={3} style={{ marginLeft: '10px' }} >
                                    <Typography className={classes.headOrderPrice} >{order.title}</Typography>
                                    <Typography className={classes.headOrderItem} variant='body2' >{order.updatedAt}</Typography>
                                </Grid>
                                <IconButton edge='start' className={classes.menuButton} color='inherit' >
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Grid container direction='column'  >
                    <br />
                    {orderData.map((order, key) => (
                        <Grid key={key} container direction='row' className={classes.order} >
                            <Grid container item direction='column' justify='center' alignItems='center' className={classes.headOrder + ' ' + classes.orderCompleted } >
                                <Typography className={classes.headOrderPrice} >{order.price}</Typography>
                                <Typography className={classes.headOrderItem} >{order.qty} Items</Typography>
                            </Grid>
                            <Grid item container xs alignItems='center' justify='center' direction='row' >
                                <Grid item direction='column' xs spacing={3} style={{ marginLeft: '10px' }} >
                                    <Typography className={classes.headOrderPrice} >{order.title}</Typography>
                                    <Typography className={classes.headOrderItem} variant='body2' >{order.updatedAt}</Typography>
                                </Grid>
                                <IconButton edge='start' className={classes.menuButton} color='inherit' >
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
        </TabPanel>
        </Container>
    );
};

export default ListOrders;
