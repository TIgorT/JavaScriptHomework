'use strict'
//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5(args);
		const objectInCache = cache.find(item => item.hash === hash);
		if (objectInCache) {
			return "Из кеша: " + objectInCache.value;
		} else {
			const result = func(...args);
			cache.push({
				hash: hash,
				value: result
			})
			if (cache.length > 5) {
				cache.shift();
			}
			return "Вычисляем: " + result;
		}
	}
	return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId;
	let isTrottled = false;
	wrapper.count = 0;
	wrapper.allCount = 0;

	function wrapper(...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args);
			wrapper.count++;
		}, delay);
		if (!isTrottled) {
			func.apply(this, args);
			wrapper.count++;
			isTrottled = true;
		}
		wrapper.allCount++;
	}
	return wrapper;
}