import React from 'react';
import { action } from '@storybook/addon-actions';
import InputCounter from './InputCounter';

const props = {
  plus: action('plus'),
  minus: action('minus'),
  setPlusNumberInputHandler: action('setPlusNumberInputHandler'),
  setMinusNumberInputHandler: action('setMinusNumberInputHandler')
};

export default {
  title: 'InputCounter'
};

export const showInputCounter = () => <InputCounter {...props} />;
