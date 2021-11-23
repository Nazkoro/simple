function someFn(str) {
	const result = str[0].toUpperCase() + str.slice(1).toLowerCase()
	console.log(result);
	return result
}

function sayHello(name) {
	return name === 'Mark' || name === 'Марк'?`Hi, ${name}!`: `Hello, ${name}!`
}

function filterStrings(arr, count){
	const filterArr = arr.filter(item => item.length <= count)
	console.log(filterArr);
	return filterArr
}

someFn('javaScript')
sayHello('Markus')