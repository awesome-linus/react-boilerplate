import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import countModule, { useCount } from '../redux/modules/countModule';
import Counter from '../components/Counter';
import ClickCounter from '../components/ClickCounter';
import InputCounter from '../components/InputCounter';

const CoutAppSample: React.FC = () => {
  const countState = useCount().count;
  const dispatch = useDispatch();

  const [plusCount, setPlusCount] = useState(0);
  const [minusCount, setMinusCount] = useState(0);

  const plusOne = () => dispatch(countModule.actions.plusOne());
  const minusOne = () => dispatch(countModule.actions.minusOne());
  const plus = () => dispatch(countModule.actions.plus(plusCount));
  const minus = () => dispatch(countModule.actions.minus(minusCount));

  const setPlusNumberInputHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setPlusCount(value);
  };

  const setMinusNumberInputHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setMinusCount(value);
  };

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8} style={{ textAlign: 'center' }}>
        <Counter count={countState.count} />
        <ClickCounter plusOne={plusOne} minusOne={minusOne} />
        <InputCounter
          plus={plus}
          minus={minus}
          setPlusNumberInputHandler={setPlusNumberInputHandler}
          setMinusNumberInputHandler={setMinusNumberInputHandler}
        />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default CoutAppSample;
