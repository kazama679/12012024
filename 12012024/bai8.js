let number1 = +prompt("nhập số thứ nhất");
let number2 = +prompt("nhập số thứ 2");
let calculation = prompt("nhập phép tính");
if(calculation=='+'){
    console.log(number1+"+"+number2+"="+(number1+number2));
} else if(calculation=='-'){
    if(number1<number2){
        console.log("kết quả sẽ ra âm, vì "+number1+" nhỏ hơn "+number2);
    } else{
    console.log(number1+"-"+number2+"="+(number1-number2));
    }
} else if(calculation=='*'){
    console.log(number1+"*"+number2+"="+(number1*number2));
} else if(calculation=='/'){
    if(number1%number2!==0){
        console.log("lỗi kết quả vì "+number1+" không chia hết cho "+number2);
    } else{
        console.log(number1+"/"+number2+"="+(number1/number2));
    }
} else{
    console.log("Không hợp lệ");
}