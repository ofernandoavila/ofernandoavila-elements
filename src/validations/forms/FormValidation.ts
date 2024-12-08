import React, { SetStateAction } from "react";
import { IInputValidation } from "../../forms/inputs/types";

export interface IValidation {
    validator: () => boolean;
}

export function ValidateForm(validations: IValidation[]) {
    const results: boolean[] = [];

    validations.map( validation => {
        results.push(validation.validator());
        
        return true;
    } );
    
    return results.filter(x => x === false).length === 0;
}

export interface IFormValidation {
    username: (value: string, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>, usernameMinLength?: number ) => boolean;
    email: (value: string, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>) => boolean;
    password: (isPasswordValid: boolean, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>) => boolean;
    confirmPassword: (value: string, confirmPassword: string, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>) => boolean;
    terms: (value: boolean, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>) => boolean;
    code: (value: string, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>) => boolean;
}

export const formValidation: IFormValidation = {
    username: (value: string, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>, usernameMinLength?: number ) => {
        if(usernameMinLength) {
            if(value.length < usernameMinLength) {
                setValidation({
                    status: "invalid",
                    message: "The username must have at least " + usernameMinLength + " characters"
                });
                return false;
            } else {
                setValidation({
                    status: 'valid'
                });
                return true;
            }
        } else {
            if(value.length < 3) {
                setValidation({
                    status: "invalid",
                    message: "The username must have at least 3 characters"
                });
                return false;
            } else {
                setValidation({
                    status: 'valid'
                });
                return true;
            }
        }
    },
    email: (value: string, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>) => {
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || value === "") {
            setValidation({
                status: "invalid",
                message: "Invalid e-mail"
            });
            return false;
        } else {
            setValidation({
                status: "valid"
            });
            return true;
        }
    },
    password: (isPasswordValid: boolean, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>) => {
        if(!isPasswordValid) {
            setValidation({
                status: "invalid",
                message: "Password invalid!"
            });
            return false;
        } else {
            setValidation({
                status: "valid"
            });
            return true;
        }
    },

    confirmPassword: (value: string, confirmPassword: string, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>) => {
        if(value !== confirmPassword || value === "" && confirmPassword === "") {
            setValidation({
                status: "invalid",
                message: "The passwords must match!"
            });

            return false;
        } else {
            setValidation({
                status: "valid"
            });
            return true;
        }
    },

    terms: (value: boolean, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>) => {
        if(!value) {
            setValidation({
                status: "invalid",
                message: "You must accept the terms to create an account!"
            });
            return false;
        } else {
            setValidation({
                status: 'valid'
            });
            return true;
        }
    },

    code: (value: string, setValidation: React.Dispatch<SetStateAction<IInputValidation | undefined>>) => {
        if(value.length === 0) {
            setValidation({
                status: "invalid",
                message: "The code cannot be empty"
            });
            return false;
        } else {
            setValidation({
                status: "valid"
            });
            return true;
        }
    }
};