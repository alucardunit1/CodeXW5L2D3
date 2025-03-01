function promptUser() {
  let billamt = prompt("Please enter your total bill:");
  let ppl = prompt("Please enter the number of people:");
  if (billamt !== null) {
    alert("Your split bill is: " + billamt / ppl);
  }
}