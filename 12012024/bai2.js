let a = +prompt("cạnh thứ nhất:");
let b = +prompt("cạnh thứ 2:");
let c = +prompt("cạnh thứ 3:");
if(a<b+c||b<a+c||c<b+a){
    console.log("thỏa mãn điều kiện với các cạnh a, b, c lần lượt bằng"+", "+a +", "+b +", "+c);
} else{
    console.log("không thỏa mãn");
}