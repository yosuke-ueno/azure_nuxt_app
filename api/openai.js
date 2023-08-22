import axios from 'axios'

export default async () => {
  console.log('3')
  const apiKey = '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'

  const params = {
    model: 'text-davinci-003',
    prompt: 'このAPIは便利だなあ',
    max_tokens: 200
  }

  try {
    const response1 = await axios.post(
      'https://api.openai.com/v1/completions',
      params,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
    console.log('1')
    console.log(response1)
  } catch (error) {
    console.error('API error:', error);
  }

  // return {
  //   response1
  // }
}

