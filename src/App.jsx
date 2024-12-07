import React, { useState } from 'react';
import './styles/App.css';
import Button from './components/Button';
import Display from './components/Display';

const App = () => {
    const [value, setValue] = useState('');

    const addToValue = (val) => {
        setValue(value + val); 
    };

    const clearValue = () => {
        setValue('');
    };

    const calculate = () => {
        try {
            setValue(eval(value).toString());
        } catch (err) {
            setValue('Erro');
        }
    };

    return (
        <div className="calculator">
            <Display value={value} />
            <div className="buttons">
                {/* Linha 1 */}
                <Button label="7" click={addToValue} />
                <Button label="8" click={addToValue} />
                <Button label="9" click={addToValue} />
                <Button label="/" click={addToValue} operation />
                {/* Linha 2 */}
                <Button label="4" click={addToValue} />
                <Button label="5" click={addToValue} />
                <Button label="6" click={addToValue} />
                <Button label="*" click={addToValue} operation />
                {/* Linha 3 */}
                <Button label="1" click={addToValue} />
                <Button label="2" click={addToValue} />
                <Button label="3" click={addToValue} />
                <Button label="-" click={addToValue} operation />
                {/* Linha 4 */}
                <Button label="C" click={clearValue} />
                <Button label="0" click={addToValue} />
                <Button label="=" click={calculate} operation />
                <Button label="+" click={addToValue} operation />
            </div>
        </div>
    );
};

export default App;
