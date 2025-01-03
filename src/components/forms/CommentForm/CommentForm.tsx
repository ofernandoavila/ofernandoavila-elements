import { useState } from 'react';
import { Button } from '../../buttons/Button/Button';
import { Text } from '../../inputs/Text/Text';
import { more_than, valid_email } from '../../../validations/inputs/BasicValidation/BasicValidation';

import '../../../scss/style.scss';
import { OnValidateInputState } from '../../inputs/types';
import { TextArea } from '../../inputs/TextArea/TextArea';

export type Comment = {
    commentBody: string;
    name: string;
    email: string;
    website: string;
}

export type CommentValidation = {
    commentBody: OnValidateInputState;
    name: OnValidateInputState;
    email: OnValidateInputState;
    website: OnValidateInputState;
};

export interface CommentFormProps {
    onCommentSubmit?: (comment: Comment) => Promise<void>;
    options?: {
        requiredName?: boolean;
        requiredEmail?: boolean;
        requiredWebsite?: boolean;
    }
}

export function CommentForm({ onCommentSubmit, options }: CommentFormProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [commentBody, setCommentBody] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [website, setWebsite] = useState<string>('');

    const [errors, setErrors] = useState<CommentValidation | null>(null);

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();

        setIsLoading(true);

        let validations = {} as CommentValidation;

        if(!more_than(commentBody, 10)) {
            validations.commentBody = 'invalid';
        }
        
        if(!more_than(name)) {
            validations.name = 'invalid';
        }
        
        if(!valid_email(email)) {
            validations.email = 'invalid';
        }
        
        if(options?.requiredWebsite) {
            if(!more_than(website)) {
                validations.website = 'invalid';
            }
        }

        setErrors(validations);

        if(errors) {
            setIsLoading(false);
            return false;
        }

        if(onCommentSubmit) {
            onCommentSubmit({} as Comment);
        }

        setIsLoading(false);
    }

    return (
        <form className={`form form-comment`} action="">
            <h4 className="title">Leave a Reply</h4>
            <div className="row">
                <TextArea
                    placeholder="Comment"
                    value={ commentBody }
                    setValue={ setCommentBody }
                    state={ errors?.commentBody }
                    onErrorMessage={ () => 'Insert a valid comment' }
                />
            </div>
            <div className="row">
                <div className="col">
                    <Text
                        placeholder="Name"
                        value={ name }
                        setValue={ setName }
                        onErrorMessage={ () => 'Insert a valid name' }
                        state={ errors?.name }
                    />
                </div>
                <div className="col">
                    <Text
                        placeholder="Email"
                        value={ email }
                        onErrorMessage={ () => 'Insert a valid e-mail' }
                        state={ errors?.email }
                        setValue={ setEmail }
                    />
                </div>
            </div>
            <Text
                placeholder="Website"
                value={ website }
                setValue={ setWebsite }
                onErrorMessage={ () => 'Insert a valid website' }
                state={ errors?.website }
            />
            <Button label="Post Comment" isLoading={isLoading} color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}