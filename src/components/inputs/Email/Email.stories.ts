import { Meta, StoryObj } from "@storybook/react";
import { Email } from "./Email";
import { EmailInputProps } from "../types";

const meta = {
    title: 'Forms/Inputs/Email',
    component: Email,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Email> ;

export default meta;
type Story = StoryObj<typeof meta>;

const template: Partial<EmailInputProps> = {
    label: 'E-mail',
    placeholder: 'Enter your e-mail here',
    onSuccessMessage: () => "E-mail is valid!",
    onErrorMessage: () => "E-mail is not valid!",
}

export const Default: Story = {
    args: {
        ...template
    }
};

export const Invalid: Story = {
    args: {
        ...template,
        value: 'email@test',
        onValidate: () => false,        
    }
};

export const Valid: Story = {
    args: {
        ...template,
        value: 'email@test.com',
        onValidate: () => true,
    }
};