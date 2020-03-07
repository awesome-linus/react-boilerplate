import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import countModule, { useCount } from '../redux/modules/countModule';
import Counter from '../components/Counter';
import AsyncCounter from '../components/AsyncCounter';

const AsyncCountApp: React.FC = () => {
  const countState = useCount().count;
  const dispatch = useDispatch();

  const postAsyncPlusOne = () =>
    dispatch(countModule.actions.postAsyncPlusOne());

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8} style={{ textAlign: 'center' }}>
        <Counter count={countState.count} />
        <AsyncCounter postAsyncPlusOne={postAsyncPlusOne} />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default AsyncCountApp;
