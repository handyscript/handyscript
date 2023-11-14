function numberToText(number) {
  
  const words = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  if (number === 0) {
    return "zero";
  }


  
  if (number >= 1 && number <= 19) {
    return words[number];
  }
  if (number >= 20 && number <= 99) {
    const unit = number % 10;
    return tens[Math.floor(number / 10)] + (unit !== 0 ? ` ${words[unit]}` : '');
  }
  if (number >= 100 && number <= 999) {
    const remainder = number % 100;
    return words[Math.floor(number / 100)] + " hundred" + (remainder !== 0 ? ` and ${numberToText(remainder)}` : '');
  }
  if (number >= 1000 && number <= 9999) {
    const remainder = number % 1000;
    return numberToText(Math.floor(number / 1000)) + " thousand" + (remainder !== 0 ? ` ${numberToText(remainder)}` : '');
  }

  return "Number out of range (1-9999)";
}

// Example usage:
console.log(numberToText(1));      // Output: "one"
console.log(numberToText(25));     // Output: "twenty five"


// you can make it guys even bigger now i did it from (1-9999) , yeah just the core
