import { MAP_TYPES } from '@deck.gl/carto';

const SIDEWALK_TILES_SOURCE_ID = 'sidewalkTilesSource';

const source = {
  id: SIDEWALK_TILES_SOURCE_ID,
  type: MAP_TYPES.TILESET,
  connection: 'se-bigquery',
  data: `cartodb-gcp-solutions-eng-team.aaron_data.dvrpc_sidewalks_tileset`,
};

export default source;
