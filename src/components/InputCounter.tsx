import React from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import ButtonCommon from './ButtonCommon';

interface Props {
  plus: VoidFunction;
  minus: VoidFunction;
  setPlusNumberInputHandler: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  setMinusNumberInputHandler: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

const InputCounter: React.FC<Props> = ({
  plus,
  minus,
  setMinusNumberInputHandler,
  setPlusNumberInputHandler
}) => {
  return (
    <>
      <Grid container style={{ marginTop: '10%' }}>
        <Grid item xs={6}>
          <Input placeholder="0" onChange={setPlusNumberInputHandler} />
        </Grid>
        <Grid item xs={6}>
          <ButtonCommon onClick={plus} text="Plus" />
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '10%' }}>
        <Grid item xs={6}>
          <Input placeholder="0" onChange={setMinusNumberInputHandler} />
        </Grid>
        <Grid item xs={6}>
          <ButtonCommon onClick={minus} text="Minus" />
        </Grid>
      </Grid>
    </>
  );
};

export default InputCounter;
