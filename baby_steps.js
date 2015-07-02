
var baby_steps = function(input) {
	var sum = 0
	for(i = 2; i < input.length; i++) {
		sum += parseInt(input[i])
	}
	return sum
}


console.log(baby_steps(process.argv))