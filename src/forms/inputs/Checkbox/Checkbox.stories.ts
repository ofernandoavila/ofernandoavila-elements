import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
    title: 'Forms/Inputs/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Checkbox> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Checkbox',
        placeholder: 'Enter your password here',
        id: 'checkbox'
    }
};

export const Invalid: Story = {
    args: {
        label: 'Checkbox',
        placeholder: 'Enter your password here',
        id: 'checkbox',
        validation: {
            status: "invalid",
            message: "Wrong password"
        }
    }
};

export const Valid: Story = {
    args: {
        label: 'Checkbox',
        placeholder: 'Enter your password here',
        validation: {
            status: "valid"
        },
        id: 'checkbox'
    }
};