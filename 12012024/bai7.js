let a = +prompt("nhập a:");
let b = +prompt("nhập b:");
let c = +prompt("nhập c:");
let delta = (b*b) - (4*a*c);

if(a==0){
    if(b==0){
        if(c==0){
            console.log("vô số nghiệm");
        } else{
            console.log("vô nghiệm");
        }
    } else{
        if(c==0){
            console.log("có 1 nghiệm x = 0");
        } else{
            console.log("có 1 nghiệm x ="+" "+-c/b);
        }
    } 
} else{
    if(b==0){
        if(c==0){
            console.log("có 1 nghiệm x = 0");
        } else{
            console.log("có 2 nghiệm:");
            console.log("x1 ="+" "+-Math.sqrt(c/a));
            console.log("x2 ="+" "+Math.sqrt(c/a));
        }
    } else{
        if(c==0){
            console.log("x1 = 0 và x2 ="+" "+-b/a);
        } else{
            console.log("x1 = "+(-b+Math.sqrt(delta))/2*a);
            console.log("x1 = "+(-b-Math.sqrt(delta))/2*a);
        }
    }
}