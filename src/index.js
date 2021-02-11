module.exports = function toReadable (number) {
	var answer = "";
	var numbers = number.toString().split('');
	var counter = numbers.length;
	
	if(counter == 1) {
		if(number == 0) {
			answer = "zero";
		}
		else {
			answer = units(number);
		}
	}
	  	
	if(counter == 2) {
		if(numbers[0] == 1) {
			answer = moreThanNineAndLessThanTwenty(numbers[1]);
		}
		else if (numbers[1] == 0) {
			answer = dozens(numbers[0]);		
		}
		else {
			answer = dozens(numbers[0]);
			answer += " ";
			answer += units(numbers[1]);
		}
	}
	
	if(counter == 3) {	
		if(numbers[1] == 0 && numbers[2] == 0) {
			answer = hundreds(numbers[0]);
		}
		else if(numbers[1] == 0) {
			answer = hundreds(numbers[0]);
			answer += " ";
			answer += units(numbers[2]);
		}
		else if(numbers[2] == 0) {
			answer = hundreds(numbers[0]);
			answer += " ";
			answer += dozens(numbers[1]);
		}
		else if(numbers[1] == 1) {
			answer = hundreds(numbers[0]);
			answer += " ";
			answer += moreThanNineAndLessThanTwenty(numbers[2]);
		}
		else {
			answer = hundreds(numbers[0]);
			answer += " ";
			answer += dozens(numbers[1]);
			answer += " ";
			answer += units(numbers[2]);
		}
	}
  return answer;
}

function units(number) {
	var answer = "";
	if(number == 1) {
		answer += "one";
	}
	else if(number == 2) {
		answer += "two";
	}
	else if(number == 3) {
		answer += "three";
	}
	else if(number == 4) {
		answer += "four";
	}
	else if(number == 5) {
		answer += "five";
	}
	else if(number == 6) {
		answer += "six";
	}
	else if(number == 7) {
		answer += "seven";
	}
	else if(number == 8) {
		answer += "eight";
	}
	else if(number == 9) {
		answer += "nine";
	}
	return answer;
}
