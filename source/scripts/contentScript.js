import browser from 'webextension-polyfill';
(async () => {
	const src = browser.runtime.getURL("js/emoji-log/lib/index.js");
	await import(src);
})();