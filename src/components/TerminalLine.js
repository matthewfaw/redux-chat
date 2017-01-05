import React from 'react';
import { Form, InputGroup, FormControl, Well } from 'react-bootstrap';

const TerminalLine = ({ style, lineNumber, onChangeInputText, onSubmitInputText, isEditable, currentInputText, output }) => (
    <Form onSubmit={
        e => {
            e.preventDefault();
            onSubmitInputText(currentInputText);
        }}>
            <InputGroup >
                <InputGroup.Addon style={style}>$ {lineNumber}</InputGroup.Addon>
                <FormControl style={style} type="text" disabled={!isEditable}
                    value={ isEditable ? currentInputText : `${currentInputText}, ${output}`}
                    onChange={onChangeInputText} />
            </ InputGroup>
            { !isEditable &&
                <Well style={style}>{output}</Well>
            }
    </Form>
);

export default TerminalLine;
