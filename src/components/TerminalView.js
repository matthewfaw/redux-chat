import React from 'react';
import { FormGroup } from 'react-bootstrap';
import TerminalLine from './TerminalLine';

let TerminalView = ({ terminalHistory, currentInputText, onChangeInputText, onSubmitInputText }) => {
    let counter = 0;
    return (
        <FormGroup>
            {terminalHistory.forEach( item => 
                <TerminalLine
                    key={counter++}
                    lineNumber={counter}
                    onChangeInputText={ (event) => onChangeInputText(event.target.value) }
                    isEditable={false}
                    currentInputText={item.inputText}
                    output={item.outputText}
                />
             )}
            <TerminalLine
                key={counter++}
                lineNumber={counter}
                onChangeInputText={ (event) => onChangeInputText(event.target.value) }
                onSubmitInputText={onSubmitInputText}
                isEditable={true}
                currentInputText={currentInputText}
                output={'  '}
            />
        </FormGroup>
    );
};

export default TerminalView;
