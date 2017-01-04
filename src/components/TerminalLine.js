import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const TerminalLine = ({ lineNumber, onChangeInputText, onSubmitInputText, isEditable, currentInputText, outputText }) => (
    <InputGroup onSubmit={
        e => {
            e.preventDefault();
            onSubmitInputText(currentInputText);
        }}>
        <InputGroup.Addon>$ {lineNumber}</InputGroup.Addon>
        <FormControl type="text" value={currentInputText} onChange={onChangeInputText} />
    </InputGroup>
);

export default TerminalLine;
