import { useEffect } from 'react';
import sidewalkTilesSource from 'data/sources/sidewalkTilesSource';
import { SIDEWALKS_LAYER_ID } from 'components/layers/SidewalksLayer';
import { useDispatch } from 'react-redux';
import {
  addLayer,
  removeLayer,
  addSource,
  removeSource,
} from '@carto/react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  centerlineClassification: {},
}));

export default function CenterlineClassification() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(addSource(sidewalkTilesSource));

    dispatch(
      addLayer({
        id: SIDEWALKS_LAYER_ID,
        source: sidewalkTilesSource.id,
      }),
    );

    return () => {
      dispatch(removeLayer(SIDEWALKS_LAYER_ID));
      dispatch(removeSource(sidewalkTilesSource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect

  return (
    <Grid container direction='column' className={classes.centerlineClassification}>
      <Grid item>Hello World</Grid>
    </Grid>
  );
}
