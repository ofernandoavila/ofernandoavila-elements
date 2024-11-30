import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../buttons/Button/Button';
import { fn } from '@storybook/test';

const meta = {
	title: 'Buttons/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	// tags: ['autodocs'],
	argTypes: {},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'Click me!',
		color: 'primary'
	},
};

export const Save: Story = {
  args: {
    label: 'Save',
	color: 'success'
  },
};