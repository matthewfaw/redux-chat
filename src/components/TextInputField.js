import React from 'react';

let TextInputField = ({ onSubmitText, currentUser }) => {
    let input;

    return (
        <div>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    onSubmitText(input.value, currentUser);
                    input.value = '';
                }
            } >
                <input ref={node => {
                    input = node;
                }} />
                <button type="submit">
                Add Todo
                </button>
            </form>
        </div>
    );
}

export default TextInputField;
