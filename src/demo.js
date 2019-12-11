import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    maxWidth: 600,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10
  },
  avatar: {
    height: 49,
    width: 49,
    marginRight: 5
  },
  content: {
    marginLeft: 5,
    padding: 0
  },
  bottom: {
    justifyContent: "space-between"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <Avatar
        aria-label="recipe"
        className={classes.avatar}
        src="https://pbs.twimg.com/profile_images/1175295104912961537/TO5Wcyda_reasonably_small.jpg"
      >
        R
      </Avatar>
      <div className={classes.content}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography variant="subtitle2">
              Oxxxymiron @norimyxxxo · Nov 6
            </Typography>
          }
          className={classes.content}
          subheader={
            <Typography variant="body2">
              Наконец-то на самом заседании, а не в зале трансляции. Семья Егора
              провела в зал как брата ^_^, приставы все поняли и на этот раз
              отреагировали адекватно.
            </Typography>
          }
        />
        <CardActions className={classes.bottom}>
          <Button aria-label="add to favorites">
            <FavoriteIcon />2
          </Button>
          <Button aria-label="show-more">
            <ShareIcon /> 3
          </Button>
          <Button aria-label="show-more">
            <ShareIcon />
          </Button>
          <Button
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
