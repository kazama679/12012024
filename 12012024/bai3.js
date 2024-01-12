let number = +prompt("Nhập vào một số:");
let check = 0;

for(let i = 1; i<= number; i++) {
  check = i;
  if(check*check==number){
    break;
  }
}
if(check * check == number) {
    console.log(number + " là một số chính phương");
} else {
    console.log(number + " không phải là số chính phương");
}