import React from "react";

import { 
    withStyles
} from '@material-ui/core/styles';
import classes from './index.module.css';
import Container from '@material-ui/core/Container';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const CustomInput = withStyles((theme) => ({
    root: {
        backgroundColor: '#F3F3F3',
        height: '66px',
        borderRadius: '15px',
        backgroundColor: '#CFE2E7',
        padding: '20px 25px'
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        border: 'none',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        height: '27px',
        transition: theme.transitions.create(['border-color', 'box-shadow'])
    },
}))(InputBase);

const CustomSearchIcon = withStyles((theme) => ({
    root: {
        color: '#A3A3A3',
        fontSize: '33px'
    }
}))(SearchIcon);

const CustomSelect = withStyles((theme) => ({
    root: {
        width: '130px'
    }
}))(Select);

const Venues = () => {

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };

    return (
        <div className="App">        
            <Container maxWidth="sm" className={classes.container}>
                <Grid container spacing={0} className={classes.header} >
                    <Grid item xs={13} className={classes.title} 
                        alignItems="center" 
                        container
                        justify="flex-start">
                        <NavigateBeforeIcon className={classes.backIcon} />
                        <span className={classes.titleText}>
                            Profile
                        </span>
                    </Grid>
                </Grid>
            
                <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.content}>
                        <Grid container spacing={0} className={classes.venuesBox}>
                            <Grid item xs={12} className={classes.venuesSearchContainer}>  
                                <FormControl fullWidth>
                                    <CustomInput 
                                        id="bootstrap-input"
                                        placeholder="Search Here"
                                        endAdornment={<InputAdornment position="end"><CustomSearchIcon /></InputAdornment>}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} className={classes.venuesItem} container justify="space-between">  
                                <p className={classes.venuesShowingText}>Showing 430 Foods</p>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <CustomSelect
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={age}
                                        onChange={handleChange}
                                        label="Age"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </CustomSelect>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default Venues;