import React from 'react';
import { Form, InputGroup, FormControl, Well, ListGroup, ListGroupItem } from 'react-bootstrap';

let TerminalLine = ({ style, lineNumber, onChangeInputText, onSubmitInputText, isEditable, currentInputText, output }) => {
    let counter = 0;
    return (
        <Form onSubmit={
            e => {
                e.preventDefault();
                onSubmitInputText(currentInputText);
            }}>
                <InputGroup>
                    <InputGroup.Addon style={style}>$ {lineNumber}</InputGroup.Addon>
                    <FormControl style={style} type="text" disabled={!isEditable}
                        value={currentInputText}
                        onChange={onChangeInputText} autoFocus />
                </ InputGroup>
                { !isEditable &&
                <Well style={style}>
                    <ListGroup>
                        {output.map(
                            artist => <ListGroupItem key={counter++} style={style}>{artist}</ListGroupItem>
                        )}
                    </ListGroup>
                </Well>
                }
        </Form>
    );
};

export default TerminalLine;
