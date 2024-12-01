import { Meta, StoryObj } from "@storybook/react";
import { ForgotPasswordForm } from "../../../forms/ForgotPasswordForm/ForgotPasswordForm";

const meta = {
    title: 'Forms/ForgotPasswordForm',
    component: ForgotPasswordForm,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof ForgotPasswordForm> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Forgot password',
        bordered: true,
        onSubmitForm: (result) => {
            console.log(result);
        },
        message: 'Enter your e-mail below and access the reset password link that we gonna send to you.',
        options: {
            backToSignIn: () => {
                console.log('teste 123');
            }
        }
    }
};