import { useState } from "react";
import { ResetCodeForm, ResetPasswordEndForm, ResetPasswordForm } from "../../../extra/forms/ResetPasswordForm/ResetPasswordForm";
import { IPageResetPasswordProps } from "./types";

export function ResetPassword({
    resetCodeForm,
    resetPasswordForm,
    resetPasswordEndForm
}: IPageResetPasswordProps) {
    const [code, setCode] = useState<string>('');
    const [isPasswordSet, setIsPasswordSet] = useState(false);

    if(code === '') {
        return (
            <ResetCodeForm
                onSubmitForm={({code}) => new Promise((resolve, reject) => {
                    setCode(code);
                })} 
                {...resetCodeForm}
            />
        );
    }

    if(!isPasswordSet) {
        return (
            <ResetPasswordForm 
                onSubmitForm={({}) => new Promise((resolve, reject) => {
                    setIsPasswordSet(true);
                })}
                {...resetPasswordForm}
            />
        );
    }

    return (
        <ResetPasswordEndForm
            {...resetPasswordEndForm!}
        />
    );
}