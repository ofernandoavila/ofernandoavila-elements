import { Meta, StoryObj } from "@storybook/react";
import { Password } from "./Password";
import { PasswordInputProps } from "../types";

const meta = {
    title: 'Forms/Inputs/Password',
    component: Password,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Password> ;

export default meta;
type Story = StoryObj<typeof meta>;

const template: Partial<PasswordInputProps> = {
    label: 'Password',
    placeholder: 'Enter your password here',
    onSuccessMessage: () => "Password is valid!",
    onErrorMessage: () => "Password is not valid!",
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