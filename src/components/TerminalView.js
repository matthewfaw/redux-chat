import React from 'react';
import { FormGroup, Well } from 'react-bootstrap';
import TerminalLine from './TerminalLine';

let TerminalView = ({ terminalHistory, currentInputText, onChangeInputText, onSubmitInputText, backgroundStyle, lineStyle }) => {
    let counter = 0;
    return (
        <Well style={backgroundStyle}>
            <FormGroup>
                {terminalHistory.map( item => 
                    <TerminalLine
                        key={counter++}
                        style={lineStyle}
                        lineNumber={counter}
                        onChangeInputText={ (event) => onChangeInputText(event.target.value) }
                        onSubmitInputText={ () => ({})}
                        isEditable={false}
                        currentInputText={item.input}
                        output={item.output}
                    />
                 )}
                <TerminalLine
                    key={counter++}
                    style={lineStyle}
                    lineNumber={counter}
                    onChangeInputText={ (event) => onChangeInputText(event.target.value) }
                    onSubmitInputText={onSubmitInputText}
                    isEditable={true}
                    currentInputText={currentInputText}
                    output={[]}
                />
            </FormGroup>
        </Well>
    );
};

export default TerminalView;
