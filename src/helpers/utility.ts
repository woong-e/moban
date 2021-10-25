export const getFirstUrl = (url: string) => {
	const urlSplit = url.split('/');
	return urlSplit[urlSplit.length -1];
}

export const getMiddleUrl = (url: string) => {
	const urlSplit = url.split('/');
	return urlSplit[urlSplit.length -2];
}