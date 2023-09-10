import fetch from 'node-fetch'
import axios from 'axios'

export default async function (context, req) {
	
	// const apiKey = process.env.OPENAI_API_KEY
	const apiKey = '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'

	const params = {
		model: 'text-davinci-003',
		prompt: 'このAPIは便利だなあ',
		max_tokens: 20
	}

	console.log('key', apiKey)

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

	if (response.status != 200) {
		throw new Error(`HTTP error! Status: ${response.status}`)
	}

	return response


	// let data = null

	// const fetchData = async () => {
	// 	console.log('1')
	// 	try {
	// 		console.log('2')
	// 		const response = await axios.post(
	// 			'https://api.openai.com/v1/completions',
	// 			params,
	// 			{
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					Authorization: `Bearer ${apiKey}`
	// 				}
	// 			}
	// 		)
	// 		// console.log('response', response)
	// 		data = response
	// 	} catch (error) {
	// 		console.error('An error occurred:', error)
	// 	}
	// }

	await fetchData()
	// const response = await axios.post(
	// 	'https://api.openai.com/v1/completions',
	// 	params,
	// 	{
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Authorization: `Bearer ${apiKey}`
	// 		}
	// 	}
	// )

	console.log('data,', data)

	return 
	// context.res.json({
	// 	text: response
	// 	// text: 'Hello World'
	// })
}