import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta = {
	title: 'Components/Alerts',
	component: Alert,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
	args: {
		mesage: "A wonderful serenity has taken possession",
		type: 'success'
	},
};

export const Danger: Story = {
	args: {
		mesage: "A wonderful serenity has taken possession",
		type: 'danger'
	},
};

export const Info: Story = {
	args: {
		mesage: "A wonderful serenity has taken possession",
		type: 'info'
	},
};

export const Warning: Story = {
	args: {
		mesage: "A wonderful serenity has taken possession",
		type: 'warning'
	},
};