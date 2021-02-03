import Vue from 'vue';
import axios from 'axios';
import { $notify } from 'boot/notify';

const isLocalhost = () => window.location.hostname.includes('localhost') && window.location.port === '8080';

const getApiURL = () => {
	if (isLocalhost())
		return 'http://10.44.245.4/dev/otm/NewSmartRouter';
	return `${window.location.origin}${window.location.pathname}`;
};

const $http = axios.create({
	baseURL: getApiURL(),
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

const showError = async error => {
	const { response } = error;
	let message = 'Erro desconhecido';

	if (response.data) {
		const { data } = response;
		if (data.message)
			message = data.message;
	}

	$notify(message, 'negative');
	return Promise.reject(error);
};

const responseFunction = response => clearData(response);
const errorFunction = error => {
	if (!error.response) {
		return showError({
			response: { data: { message: 'Sem conexão' } }
		});
	}
	return showError(error);
};

$http.interceptors.response.use(responseFunction, errorFunction);

Vue.prototype.$http = $http;

export { $http };
