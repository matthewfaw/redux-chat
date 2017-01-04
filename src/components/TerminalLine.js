import React from 'react';
import { Form, InputGroup, Button,  FormControl } from 'react-bootstrap';

const TerminalLine = ({ lineNumber, onChangeInputText, onSubmitInputText, isEditable, currentInputText, outputText }) => (
    <Form inline onSubmit={
        e => {
            e.preventDefault();
            onSubmitInputText(currentInputText);
        }}>
            <InputGroup.Addon>$ {lineNumber}</InputGroup.Addon>
            <FormControl type="text" value={currentInputText} onChange={onChangeInputText} />
    </Form>
);

export default TerminalLine;
