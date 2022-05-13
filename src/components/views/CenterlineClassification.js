import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  centerlineClassification: {},
}));

export default function CenterlineClassification() {
  const classes = useStyles();

  // [hygen] Add useEffect

  return (
    <Grid container direction='column' className={classes.centerlineClassification}>
      <Grid item>Hello World</Grid>
    </Grid>
  );
}
