import type { Meta, StoryObj } from '@storybook/react';
import { PostCard } from './PostCard';

const meta = {
	title: 'Card/PostCard',
	component: PostCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		postTitle: 'Understanding how Links and protocols works',
		postExcerpt: 'In the realm of technology blogging, captivating your audience goes beyond just the written word. Incorporating eye-catching…',
		postCategory: "Fundamentals",
		postAuthor: "Fernando Avila",
		postReadTime: 1,
		postRating: 2,
		postCategoryBackgroundColor: '#9A59B5',
		postCategoryColor: '#FFFFFF'
	},
};