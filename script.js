function fibonacci(num) {
 if(num==1){
        return 0;
    }
    if(num==2){
        return 1;
    }
    return fibonacci(num-1)+fibonacci(num-2);
}
console.log("fibonacci(1)",fibonacci(1));
console.log("fibonacci(5)",fibonacci(5));
	

module.exports = fibonacci;
