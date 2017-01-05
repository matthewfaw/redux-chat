import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const TextInputField = ({ fieldText, onChangeText, onSubmitText, currentUser, buttonText }) => {
    return (
        <div>
            <Form inline onSubmit={
                e => {
                    e.preventDefault();
                    onSubmitText(fieldText, currentUser);
                }
            } >
                <FormControl type="text" value={fieldText} onChange={onChangeText} />
                <Button type="submit">
                {buttonText}
                </Button>
            </Form>
        </div>
    );
}

export default TextInputField;
