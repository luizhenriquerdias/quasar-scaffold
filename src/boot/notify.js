import { Notify } from 'quasar';

Notify.setDefaults({
	timeout: 2000,
	position: 'bottom'
});

export const notify = (message, type = 'positive') => {
	if (!message)
		return;
	Notify.create({ message, type });
};
