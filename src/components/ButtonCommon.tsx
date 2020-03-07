import React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonCommon: React.FC<Props> = ({ text, onClick }) => {
  return (
    <Button variant="outlined" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonCommon;
