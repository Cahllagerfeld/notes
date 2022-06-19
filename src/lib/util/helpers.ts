export const showHideOverflowY = (bool: boolean) => {
	const html = document.querySelector('html');
	if (bool) {
		html.classList.add('overflow-y-hidden');
	} else {
		html.classList.remove('overflow-y-hidden');
	}
};

export const convertToDate = (dateString: string) => {
	const parts = dateString.split('-');
	return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
};
