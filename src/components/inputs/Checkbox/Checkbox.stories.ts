import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { CheckboxInputProps } from "../types";

const meta = {
    title: 'Forms/Inputs/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Checkbox> ;

export default meta;
type Story = StoryObj<typeof meta>;

const template: Partial<CheckboxInputProps> = {
    id: 'checkbox',
    name: 'checkbox',
    label: 'Checkbox',
    onSuccessMessage: () => "Checked!",
    onErrorMessage: () => "You must check this field!",
}

export const Default: Story = {
    args: {
        ...template
    }
};

export const Invalid: Story = {
    args: {
        ...template,
        value: false,
        onValidate: () => false,        
    }
};

export const Valid: Story = {
    args: {
        ...template,
        value: true,
        onValidate: () => true,
    }
};