import { Meta, StoryObj } from "@storybook/react";
import { CommentForm } from "./CommentForm";

const meta = {
    title: 'Extra/Forms/CommentForm',
    component: CommentForm,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof CommentForm> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onCommentSubmit: (comment) => new Promise<void>((resolve, reject) => {
                console.log(comment);
                resolve();
            }),

        options: {
            "requiredWebsite": false
        }
    }
};