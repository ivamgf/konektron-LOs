/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 5,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Konektron Logo"
          height="360"
          image="https://github.com/ivamgf/konektron-los/blob/main/public/assets/images/logo-konektron.png?raw=true"
          title="Konektron Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Konektron LOs
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Konektron software package for building learning objects. Current version 2.0.0.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}
