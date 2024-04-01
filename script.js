function fibonacci(num) {
	let a=0,b=1,c;
if (num == 1) 
	return a;
	for (let i = 2; i <= num; i++) {
		c = a+b;
		a=b;
		b=c;
	}
	return b;
}

module.exports = fibonacci;
