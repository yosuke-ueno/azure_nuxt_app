import { ref, useContext } from '@nuxtjs/composition-api'
import axios from 'axios'

const useApi = () => {
  const openaiResult = ref(null)

  const { $config } = useContext()
	
	// const apiKey = process.env.OPENAI_API_KEY
	const apiKey = $config.apiKey


  const params = {
    model: 'text-davinci-003',
    prompt: 'このAPIは便利だなあ',
    max_tokens: 100
  }

  console.log('apiKey2', apiKey)

  const fetchOpenaiResult = async () => {
    try {
      console.log('1')
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        params,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`
          }
        }
      )
      openaiResult.value = response.data
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return {
    openaiResult,
    fetchOpenaiResult
  }
}

export default useApi
// export type ApiStore = ReturnType<typeof useApi>
// export const ApiKey = Symbol('ApiStore')