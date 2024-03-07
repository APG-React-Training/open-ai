import OpenAI from "openai";
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY
console.log(apiKey)
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export const executeText = async (prompt) => {
  let result = '', error

  let completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4",
  })

  result = completion.choices[0].message.content

  return [result, error]
}

export const executeImage = async (prompt) => {
  let result, error
/// paste
  const apiUrl = 'https://api.openai.com/v1/images';


// Define parameters for image generation
  const parameters = {
    prompt,
  };

// Make a request to the OpenAI API
  axios.post(apiUrl, parameters, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }
  })
    .then(response => {
      // Handle response, the generated image will be in response.data.url
      console.log('Generated image URL:', response.data.url);
    })
    .catch(error => {
      console.error('Error generating image:', error.response.data.error);
    });


  //// end


  return [result, error]
}