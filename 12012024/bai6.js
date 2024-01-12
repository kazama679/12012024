let number = prompt("Nhập vào một số có 4 chữ số:");
if(number.length!==4||isNaN(number)){
  console.log("Vui lòng nhập vào một số có 4 chữ số.");
}else{
  console.log(number[0]);
  console.log(number[1]);
  console.log(number[2]);
  console.log(number[3]);
} 