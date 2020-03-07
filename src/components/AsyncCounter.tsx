import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonCommon from './ButtonCommon';

interface Props {
  postAsyncPlusOne: VoidFunction;
}

const AsyncCounter: React.FC<Props> = ({ postAsyncPlusOne }) => {
  return (
    <Grid container style={{ marginTop: '10%' }}>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <ButtonCommon onClick={postAsyncPlusOne} text="Async +1" />
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
};

export default AsyncCounter;
