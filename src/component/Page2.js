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

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 100,
    marginLeft: 250,
  },
  media: {
    height: 200,
  },
});
const navStyle = {
  color: "white",
};

export default function Project2() {
  const classes = useStyles();

  return (
    <div>
      <Link style={navStyle} to="/">
        <li className="Page2">Home</li>
      </Link>
      <Grid container spacing={4} justify="center">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={"/Pictures/project1.png"}
              title="Project1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                COVID-19 Statistics
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
              image="/Pictures/project1.png"
              title="Project1"
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
