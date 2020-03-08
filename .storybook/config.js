import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import requireContext from 'require-context.macro';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withA11y);

const req = requireContext('../src/components', true, /.(story|stories).tsx$/);

configure(req, module);
