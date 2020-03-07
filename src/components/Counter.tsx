import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

interface Props {
  count: number;
}

const Counter: React.FC<Props> = ({ count }) => {
  return (
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Box color="text.primary" p={5}>
          clicked: {count}
        </Box>
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
};

export default Counter;
