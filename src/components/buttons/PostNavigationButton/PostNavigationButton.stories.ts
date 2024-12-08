import type { Meta, StoryObj } from '@storybook/react';
import { PostNavigationButton, PostNavigationTypes } from './PostNavigationButton';
import { IPostNavigationButtonProps } from '../types';

const meta = {
	title: 'Extra/Buttons/PostNavigationButton',
	component: PostNavigationButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PostNavigationButton>;

export default meta;
type Story = StoryObj<IPostNavigationButtonProps>;

export const Primary: Story = {
	args: {
		type: 'previous',
		postTitle: 'Text Tags: Blocks, headings and Inlines a quick start'
	},
	argTypes: {
		type: {
			options: Object.keys(PostNavigationTypes),
			control: {
				type: 'inline-radio'
			}
		}
	}
};