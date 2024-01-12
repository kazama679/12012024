let a = +prompt("Nhập số a bất kì");
let b = +prompt("Nhập số b bất kì");
let x = -b/a;
if(a==0){
    if(b==0){
        console.log("Phương trình vô số nghiệm");
    }else{
       console.log("Phương trình vô nghiệm");
    }
}else{
    if(b==0){
        console.log("Phương trình có nghiệm x=0");
    } else{
        console.log("Phương trình có nghiệm x="+x);
    }
}