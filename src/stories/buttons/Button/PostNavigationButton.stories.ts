import type { Meta, StoryObj } from '@storybook/react';
import { PostNavigationButton } from '../../../buttons/PostNavigationButton/PostNavigationButton';
import { fn } from '@storybook/test';

const meta = {
	title: 'Buttons/PostNavigationButton',
	component: PostNavigationButton,
	parameters: {
		layout: 'centered',
	},
	// tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PostNavigationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		type: 'previous',
		postTitle: 'Text Tags: Blocks, headings and Inlines a quick start'
	},
};