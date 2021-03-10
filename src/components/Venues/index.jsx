import React from "react";

import { 
    withStyles,
    makeStyles
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Items from './Items';

const CustomInput = withStyles((theme) => ({
    root: {
        height: '66px',
        borderRadius: '15px',
        padding: '0 25px',
        backgroundColor: 'white',
        margin: '0 24px'
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        border: 'none',
        fontSize: 14,
        width: '100%',
        padding: '10px 12px',
        height: '27px',
        transition: theme.transitions.create(['border-color', 'boxShadow'])
    },
}))(InputBase);

const CustomSearchIcon = withStyles(() => ({
    root: {
        color: '#A3A3A3',
        fontSize: '33px'
    }
}))(SearchIcon);

const SelectInput = withStyles((theme) => ({
    input: {
        borderRadius: 13,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        borderColor: '#FF3974',
        color: '#59495F',
        '&:focus': {
            borderRadius: 13,
        }
    }
}))(InputBase);

const useStyles = makeStyles({
    container : {
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingTop: '30px',
        background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)'
    },
    header : {
        paddingLeft: '24px',
        paddingRight: '24px',
    },
    backIcon : {
        color: '#fff',
        fontSize: '30px',
        flex: '0 1 auto',
        marginRight: 'auto,  ' 
    },
    title : {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '30px',
        color: '#fff',
        position: 'relative',
    },
    venuesBox : {
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingBottom: '24px',
        paddingTop: '30px',
        boxShadow: 'none',
        borderRadius: '50px 50px 0px 0px',
        backgroundColor: 'white',
        minHeight: '100vh'
    },
    venuesSorting : {
        paddingBottom: '30px',
    },
    venuesSearchContainer : {
        paddingBottom: '32px',
        marginTop: '50px'
    },
    venuesTextWelcome: {
        fontSize: '16px',
        color: '#464646',
    },
    venuesSectionTitle: {
        fontSize: '18px',
        marginBottom: '25px',
    },
    titleText: {
        flex: '0 1 auto',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    venuesShowingText: {
        fontSize: '18px',
        margin: 0
    },
    selectIcon: {
        fill: '#FF3974',
    }
});

const Venues = () => {

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const classes = useStyles();

    return (
        <div className="App">        
            <Container maxWidth="sm" className={classes.container}>
                <Grid container spacing={0} className={classes.header} >
                    <Grid item xs={13} className={classes.title} 
                        alignItems="center" 
                        container
                        justify="space-between">
                        <NavigateBeforeIcon className={classes.backIcon} />
                        <span>
                            Venue
                        </span>
                        <img src="/src/img/imgadmin.png" />
                    </Grid>
                </Grid>

                <Grid item xs={12} className={classes.venuesSearchContainer}>  
                    <FormControl fullWidth>
                        <CustomInput 
                            id="bootstrap-input"
                            placeholder="Search Here"
                            endAdornment={<InputAdornment position="end"><CustomSearchIcon /></InputAdornment>}
                        />
                    </FormControl>
                </Grid>
            
                <Grid spacing={0} item xs={12} className={classes.venuesBox}>
                    <Grid item xs={12} className={classes.venuesSorting} container justify="space-between" alignItems="center">  
                        <p className={classes.venuesShowingText}>Showing 430 Foods</p>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                                input={<SelectInput />}
                                className={classes.select}
                                inputProps={{
                                    classes: {
                                        icon: classes.selectIcon,
                                    },
                                }}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>  
                        <Items />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default Venues;