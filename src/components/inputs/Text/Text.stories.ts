import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
    title: 'Forms/Inputs/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Text> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Name',
        placeholder: 'John Doe'
    }
};

export const Invalid: Story = {
    args: {
        label: 'Name',
        placeholder: 'John Doe',
        validation: {
            status: "invalid",
            message: "Insert your name here"
        }
    }
};

export const Valid: Story = {
    args: {
        label: 'Name',
        placeholder: 'John Doe',
        validation: {
            status: "valid",
            message: "Success!"
        }
    }
};