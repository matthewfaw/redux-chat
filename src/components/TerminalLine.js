import React from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';

const TerminalLine = ({ lineNumber, onChangeInputText, onSubmitInputText, isEditable, currentInputText, output }) => (
    <Form onSubmit={
        e => {
            e.preventDefault();
            onSubmitInputText(currentInputText);
        }}>
            <InputGroup>
                <InputGroup.Addon>$ {lineNumber}</InputGroup.Addon>
                <FormControl type="text" 
                    value={ isEditable ? currentInputText : `${currentInputText}, ${output}`}
                    onChange={onChangeInputText} />
            </ InputGroup>
    </Form>
);

export default TerminalLine;
