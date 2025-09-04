function findFactorial() {
  let num = document.getElementById("numberInput").value;
  let resultElement = document.getElementById("result");

  if (num === "") {
    resultElement.innerText = "Please enter a number.";
    return;
  }

  num = parseInt(num);

  if (num < 0) {
    resultElement.innerText = "Factorial is not defined for negative numbers.";
    return;
  }

  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  resultElement.innerText = `Factorial of ${num} is ${fact}`;
}
