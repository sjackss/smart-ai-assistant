exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { prompt } = JSON.parse(event.body);
    
    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Prompt is required' })
      };
    }

    // Get Ollama host from environment variable or use localhost
    const ollamaHost = process.env.OLLAMA_HOST || 'http://localhost:11434';
    const ollamaModel = process.env.OLLAMA_MODEL || 'llama3.2';

    // Call Ollama API
    const response = await fetch(`${ollamaHost}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: ollamaModel,
        messages: [
          { role: 'user', content: prompt }
        ],
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.status}`);
    }

    const data = await response.json();
    const aiReply = data.message?.content || 'No response from AI';

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reply: aiReply })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to get AI response',
        details: error.message 
      })
    };
  }
};
