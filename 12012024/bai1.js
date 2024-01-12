let a = +prompt("nhập a:");
let b = +prompt("nhập b:");
if(a%b==0){
    console.log("a chia hết cho b");
} else if(b%a==0){
    console.log("b chia hết cho a");
} else{
    console.log("cả a và b đều không chia hết cho nhau");
}