/**
 * @deprecated Import single functions insted
 */
export const BasicValidation = {
    not_empty: (value: string) : boolean => {
        return value !== "";
    },
    more_than: (value: string, length: number = 3) => {
        return value.length >= length;
    },
    valid_email: (email: string) => {
        return (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) || email === "") ? false : true;
    }
};

export function not_empty(value: string) : boolean {
    return value !== "";
}

export function more_than(value: string, length: number = 3) {
    return value.length >= length;
}

export function valid_email(email: string) {
    return (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) || email === "") ? false : true;
}