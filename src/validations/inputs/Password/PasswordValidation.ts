export const PasswordValidation = {
    minimumChars: (password: string, minimumChars: number) => password.length >= minimumChars,
    hasNumber: (password: string) => /\d/.test(password),
    hasUpperCase: (password: string) => /[A-Z]/.test(password),
    hasSpecialChar: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
    matchPassword: (password: string, confirmPassword: string) => confirmPassword !== "" && password === confirmPassword,
    completeValidation: (password: string, minimumChars: number) => {
        let results: boolean[] = [];

        results.push(PasswordValidation.minimumChars(password, minimumChars));
        results.push(PasswordValidation.hasNumber(password));
        results.push(PasswordValidation.hasUpperCase(password));
        results.push(PasswordValidation.hasSpecialChar(password));

        return !(results.filter( x => x === false).length > 0);
    }
}