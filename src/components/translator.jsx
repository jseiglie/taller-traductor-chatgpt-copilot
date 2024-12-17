// filepath: /mnt/fa862565-e7cd-4840-9b99-bee0e071931e/talleres/traductor/src/components/Translator.js
import React, { useState } from 'react';
import { translateText } from '../services/chatgptService';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('Spanish');
  const [error, setError] = useState(null);

  const handleTranslate = async () => {
    try {
      const translation = await translateText(inputText, targetLanguage);
      setTranslatedText(translation);
      setError(null);
    } catch (error) {
      setError('Translation failed. Please try again.');
    }
  };

  return (
    <div>
      <h1>Translator</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Italian">Italian</option>
        <option value="Japanese">Japanese</option>

        {/* Add more languages as needed */}
      </select>
      <button onClick={handleTranslate}>Translate</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Translated Text</h2>
      <p>{translatedText}</p>
    </div>
  );
};

export default Translator;