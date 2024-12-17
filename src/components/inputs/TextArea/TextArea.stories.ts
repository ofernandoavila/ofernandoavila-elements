import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";
import { TextAreaInputProps } from "../types";

const meta = {
    title: 'Forms/Inputs/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof TextArea> ;

export default meta;
type Story = StoryObj<typeof meta>;

const template: Partial<TextAreaInputProps> = {
    id: 'checkbox',
    name: 'checkbox',
    label: 'Message',
    placeholder: 'Write your message here',
    onSuccessMessage: () => "Textarea is valid!",
    onErrorMessage: () => "Textarea is not valid!",
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