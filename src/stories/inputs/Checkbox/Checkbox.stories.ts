import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../../inputs/Checkbox/Checkbox";

const meta = {
    title: 'Inputs/Checkbox',
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
        placeholder: 'Enter your password here'
    }
};

export const Invalid: Story = {
    args: {
        label: 'Checkbox',
        placeholder: 'Enter your password here',
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
        }
    }
};