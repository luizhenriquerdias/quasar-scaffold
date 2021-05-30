import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		Accept: 'application/json'
	},
	responseType: 'json'
});

const clearData = response => {
	if (typeof (response || {}).data === 'object')
		return clearData(response.data);
	return response;
};

api.interceptors.response.use(clearData, e => e);

export { api };
