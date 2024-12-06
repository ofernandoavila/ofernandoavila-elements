import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../../alert/Alert';

const meta = {
	title: 'Alert/Alert',
	component: Alert,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		mesage: "A wonderful serenity has taken possession",
		type: 'danger'
	},
};