function GetuserNumber() {
  let userNumber = Number(prompt("enter number"));
  for (let i = 1; i <= userNumber; i++) {
    console.log(i);
  }
}
//2
function userNumbers() {
  let userOneNumber = Number(prompt("enter number 1"));
  let userTowNumber = Number(prompt("enter number 2"));
  for (let i = userOneNumber; i <= userTowNumber; i++) {
    console.log(i);
  }
}

//3
function multiplicationTable() {
  let size = 10;
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size; j++) {
      row += `${i * j}\t`;
    }
    console.log(row);
  }
}
