import React, {useState} from 'react';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'Afrikaans', 
        value: 'af'
    }, 
    {
        label: 'Arabic', 
        value: 'ar'
    },
    {
        label: 'Hindi', 
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>
                        Enter text
                    </label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
                options={options} 
                selected={language} 
                onSelectedChange={setLanguage} 
                label="Select a language"
            />
            <div>
                Translated text
            </div>
        </div>
    );
};

export default Translate;