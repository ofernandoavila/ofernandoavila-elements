interface IFormProps {
    title?: string;
    bordered?: boolean;
    message?: string;
    onSubmitForm?: (form: any) => Promise<void>;
}

interface IFormPasswordCreationValidation {
    hasNumber?: boolean;
    hasSpecialChar?: boolean;
    hasUpperCase?: boolean;
    minimumChars?: number;
}

interface IFormLoginFormProps extends IFormProps {
    rememberPasswordOption?: boolean;
}

interface IPostSectionWidgetProps {
    active?: number;
    topics?: { title: string; anchor: string; }[];
}

interface IPostContentWidgetProps {
    postTitle: string;
    postPublishDate: string;
    postThumbnailUrl: string;
    postContent: string;
}