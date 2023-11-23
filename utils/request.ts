import axios from 'axios'


export const service = axios.create({
	// @ts-ignore
	baseURL: '/api',
	timeout: 5000,
})
