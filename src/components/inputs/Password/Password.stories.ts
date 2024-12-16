import { Meta, StoryObj } from "@storybook/react";
import { Password } from "./Password";

const meta = {
    title: 'Forms/Inputs/Password',
    component: Password,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Password> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Password',
        placeholder: 'Enter your password here'
    }
};

export const Invalid: Story = {
    args: {
        label: 'Password',
        placeholder: 'Enter your password here',
        validation: {
            status: "invalid",
            message: "Wrong password"
        }
    }
};

export const Valid: Story = {
    args: {
        label: 'Password',
        placeholder: 'Enter your password here',
        validation: {
            status: "valid"
        }
    }
};