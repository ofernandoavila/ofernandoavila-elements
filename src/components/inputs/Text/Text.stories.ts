import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { TextInputProps } from "../types";

const meta = {
    title: 'Forms/Inputs/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Text> ;

export default meta;
type Story = StoryObj<typeof meta>;

const template: Partial<TextInputProps> = {
    id: 'checkbox',
    name: 'checkbox',
    label: 'Text',
    onSuccessMessage: () => "Text is valid!",
    onErrorMessage: () => "Text is not valid!",
}

export const Default: Story = {
    args: {
        ...template
    }
};

export const Invalid: Story = {
    args: {
        ...template,
        onValidate: () => false,        
    }
};

export const Valid: Story = {
    args: {
        ...template,
        onValidate: () => true,
    }
};