import { Meta, StoryObj } from "@storybook/react";
import { Email } from "./Email";

const meta = {
    title: 'Forms/Inputs/Email',
    component: Email,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Email> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'E-mail',
    }
};
export const Valid: Story = {
    args: {
        value: 'email@test.com',
        setValue: ()=> {},
        label: 'E-mail',
        onSuccessMessage: () => "E-mail is valid!",
        onValidate: () => true,
    }
};
export const Invalid: Story = {
    args: {
        value: 'email@test',
        setValue: () => {},
        label: 'E-mail',
        onErrorMessage: () => "E-mail is not valid!",
        onValidate: () => false,
    }
};