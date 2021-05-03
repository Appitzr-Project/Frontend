import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardContent,CardActions,Collapse,Typography,IconButton} from "@material-ui/core"
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckBox from './CheckBox'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    color: 'black'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  checkboxId:{
      marginLeft:'1rem'
  },
  labelText:{
    color: 'black'
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActions disableSpacing>
        <IconButton aria-label="categories" 
          onClick={handleExpandClick}
          aria-expanded={expanded}>
            <Typography variant='h4' fontWeight={14} className={classes.labelText}>Categories</Typography>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded}>
        <CardContent>
        {Array.from({ length: 5 }).map((i, index) => (
            <CheckBox label='Pizza' className={classes.checkboxId}/>
      ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}