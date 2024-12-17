export const EmailValidation = {
    validate: (email: string) => {
        return (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) || email === "") ? false : true;
    }
};