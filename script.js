function fibonacci(num) {
	let a=0,b=1;
if (num == 1) {
	return a;
}
if (num==2) {
	return b;
}
else{
	return fibonacci(num-1)+fibonacci(num-2);
}
}

module.exports = fibonacci;
