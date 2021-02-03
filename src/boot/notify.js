import Vue from 'vue';
import { Notify } from 'quasar';

Notify.setDefaults({
	timeout: 5000,
	position: 'bottom'
});

export const $notify = (message, type) => {
	if (!message)
		return;
	if (typeof message === 'object')
		Notify.create(message);
	else
		Notify.create({ message, type: type || 'positive' });
};

Vue.prototype.$notify = $notify;
