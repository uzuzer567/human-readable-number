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

function moreThanNineAndLessThanTwenty(number) {
	var answer = "";
	if(number == 0) {
		answer += "ten";
	}
	else if(number == 1) {
		answer += "eleven";
	}
	else if(number == 2) {
		answer += "twelve";
	}
	else if(number == 3) {
		answer += "thirteen";
	}
	else if(number == 4) {
		answer += "fourteen";
	}
	else if(number == 5) {
		answer += "fifteen";
	}
	else if(number == 6) {
		answer += "sixteen";
	}
	else if(number == 7) {
		answer += "seventeen";
	}
	else if(number == 8) {
		answer += "eighteen";
	}
	else if(number == 9) {
		answer += "nineteen";
	}
	return answer;
}

function dozens(number) {
	var answer = "";
	if(number == 1) {
		answer += "ten";
	}
	else if(number == 2) {
		answer += "twenty";
	}
	else if(number == 3) {
		answer += "thirty";
	}
	else if(number == 4) {
		answer += "forty";
	}
	else if(number == 5) {
		answer += "fifty";
	}
	else if(number == 6) {
		answer += "sixty";
	}
	else if(number == 7) {
		answer += "seventy";
	}
	else if(number == 8) {
		answer += "eighty";
	}
	else if(number == 9) {
		answer += "ninety";
	}
	return answer;
}

function hundreds(number) {
	var answer = "";
	if(number == 1) {
		answer = "one hundred";
	}	
	else if(number == 2) {
		answer = "two hundred";
	}
	else if(number == 3) {
		answer = "three hundred";
	}
	else if(number == 4) {
		answer = "four hundred";
	}
	else if(number == 5) {
		answer = "five hundred";
	}
	else if(number == 6) {
		answer = "six hundred";
	}
	else if(number == 7) {
		answer = "seven hundred";
	}
	else if(number == 8) {
		answer = "eight hundred";
	}
	else if(number == 9) {
		answer = "nine hundred";
	}
	return answer;
}

