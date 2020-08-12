import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";


import project1 from "../Pictures/project1.png";
import project2 from "../Pictures/project2.png";
import project3 from "../Pictures/project3.png";
import "./picture.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 100,
    marginLeft: 250,
    zIndex: 1000,
    position: 'relative',
    // boxShadow: '0 3px 5px 2px rgba(255, 255, 255, 0)',
  },
  media: {
    height: 220,
    width: 250,
  },
});


export default function Project2() {
  const classes = useStyles();

  return (
    <div>
      <Link  to="/">
        <li className="Word">Home</li>
      </Link>

      

      <Grid container item xs={12} spacing={4} justify="center">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={project1}
              title="Project1 Glimpse"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                COVID-19 Statistics Representation
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Stack: React JS & Material UI
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              href="https://github.com/HamaylAfzal/-Covid-19-Stats-Preview-website.git"
              target="_https://github.com/HamaylAfzal/-Covid-19-Stats-Preview-website.git"
            >
              <Button onclick="" size="small" color="primary">
                Learn More
              </Button>
            </a>
          </CardActions>
        </Card>




        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={project3}
              title="Project1 Glimpse"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Portfolio
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Stack: React JS & Material UI
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              href="https://github.com/HamaylAfzal/Portfolio.git"
              target="_https://github.com/HamaylAfzal/Portfolio.git"
            >
              <Button onclick="" size="small" color="primary">
                Learn More
              </Button>
            </a>
          </CardActions>
        </Card>





        <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
              className={classes.media}
              image={project2}
              title="Project 2 Glimpse"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                UniStroke Charatcer recognition
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Stack: JAVA
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              href="https://github.com/HamaylAfzal/Unistroke-Character-Recognition.git"
              target="_https://github.com/HamaylAfzal/Unistroke-Character-Recognition.git"
            >
              <Button onclick="" size="small" color="primary">
                Learn More
              </Button>
            </a>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
