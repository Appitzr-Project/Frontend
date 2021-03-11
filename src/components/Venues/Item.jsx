import React, { memo } from "react";

import { 
    withStyles,
    makeStyles
} from '@material-ui/core/styles';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from "@material-ui/icons/Star";


const CustomListItemText = withStyles(() => ({
    multiline: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
        height: '87px',
        margin: 0
    },
    primary: {
        flexGrow: 1
    },
    secondary: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        color: '#0E0E0E'
    }
}))(ListItemText);

const CustomListItem = withStyles(() => ({
    root: {
        borderRadius: '15px',
        boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
        marginBottom: '20px',
        padding: '15px'
    }
}))(ListItem);

const VenueAvatar = withStyles((theme) => ({
    root: {
        width: '87px',
        height: '87px',
        marginRight: '20px'
    }
}))(Avatar);

const CustomStarIcon = withStyles((theme) => ({
    root: {
        width: '14px'
    }
}))(StarIcon);

const useStyles = makeStyles({
    venueName: {
        fontSize: '14px',
        color: '#7B00AB',
        fontWeight: 600,
        display: 'block'
    },
    venueCategory: {
        fontWeight: 700,
        display: 'block'
    },
    venueLocation: {
        fontSize: '12px',
        fontWeight: 600
    },
    containerAvatar: {
        position: 'relative'
    },
    loveIcon: {
        left: '6px',
        position: 'absolute',
        zIndex: 1,
        top: '6px',
    }
});

const Item = () => {
    const classes = useStyles();
    return(
        <CustomListItem>
            <ListItemAvatar className={classes.containerAvatar}>
                <FavoriteIcon htmlColor="#F1608A" className={classes.loveIcon} />
                <VenueAvatar variant="rounded" src="/src/img/venueimage.png" alt="Venue Image" />
            </ListItemAvatar>
            <CustomListItemText primary={
                <React.Fragment>  
                    <span className={classes.venueName}>Restaurant Hubert</span>
                    <span className={classes.venueCategory}>$$$ French</span>
                </React.Fragment>
            } secondary={
                <React.Fragment>  
                    <span className={classes.venueLocation}>Sydney NSW</span>
                    <span>
                        <CustomStarIcon htmlColor="#FF7F23" />
                        <CustomStarIcon htmlColor="#FF7F23" />
                        <CustomStarIcon htmlColor="#FF7F23" />
                        <CustomStarIcon htmlColor="#FF7F23" />
                        <CustomStarIcon htmlColor="#969696" />
                    </span>
                </React.Fragment>
            } />
        </CustomListItem>
    )
}

export default memo(Item);