import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta = {
    title: 'Forms/Inputs/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof TextArea> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Message',
        placeholder: 'Write your message here'
    }
};

export const Invalid: Story = {
    args: {
        label: 'Message',
        placeholder: 'Write your message here',
        validation: {
            status: "invalid",
            message: "Insert your name here"
        }
    }
};

export const Valid: Story = {
    args: {
        label: 'Message',
        placeholder: 'Write your message here',
        validation: {
            status: "valid",
            message: "Success!"
        }
    }
};