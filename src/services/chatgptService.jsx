const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = 'https://api.openai.com/v1/chat/completions';

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: `You are a translator.` },
          { role: 'user', content: `Translate the following text to ${targetLanguage}: ${text}` },
        ],
        max_tokens: 100,
      }),
    });

    const data = await response.json();
    console.log('API response:', data); // Log the full response for debugging
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content.trim();
    } else {
      console.error('Unexpected response format:', data);
      throw new Error('Translation failed');
    }
  } catch (error) {
    console.error('Error translating text:', error);
    throw error;
  }
};