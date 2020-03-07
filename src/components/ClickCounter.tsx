import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonCommon from './ButtonCommon';

interface Props {
  minusOne: VoidFunction;
  plusOne: VoidFunction;
}

const ClickCounter: React.FC<Props> = ({ minusOne, plusOne }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <ButtonCommon onClick={minusOne} text="-1" />
      </Grid>
      <Grid item xs={6}>
        <ButtonCommon onClick={plusOne} text="+1" />
      </Grid>
    </Grid>
  );
};

export default ClickCounter;
