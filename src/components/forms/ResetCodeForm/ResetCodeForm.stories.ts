import { Meta, StoryObj } from "@storybook/react";
import { ResetCodeForm } from "../ResetCodeForm/ResetCodeForm";

const meta = {
    title: 'Extra/Forms/ResetCodeForm',
    component: ResetCodeForm,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof ResetCodeForm> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        bordered: true,
        message: '',
        title: 'Reset Password'
    }
};