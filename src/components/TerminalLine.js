import React from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';

const TerminalLine = ({ lineNumber, onChangeInputText, onSubmitInputText, isEditable, currentInputText, output }) => (
    <Form inline onSubmit={
        e => {
            e.preventDefault();
            onSubmitInputText(currentInputText);
        }}>
            <InputGroup.Addon>$ {lineNumber}</InputGroup.Addon>
            <FormControl type="text" 
                value={ isEditable ? currentInputText : `${currentInputText}, ${output}`}
                onChange={onChangeInputText} />
    </Form>
);

export default TerminalLine;
