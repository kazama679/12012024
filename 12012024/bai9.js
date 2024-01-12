let day = +prompt("nhập ngày");
let month = +prompt("nhập tháng");
let year = +prompt("nhập năm");
switch(month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        if(day>0&&day<32&&year>0){
            console.log("ngày "+day+" tháng "+month+" năm "+year +" là hợp lệ");
        } else{
            console.log("ngày "+day+" tháng "+month+" năm "+year +" là không hợp lệ");
        }
        break;
    case 2:
        if(year%4==0&&year%100!=0){
            if(day>0&&day<30&&year>0){
                console.log("ngày "+day+" tháng "+month+" năm "+year +" là hợp lệ");    
            } else{
                console.log("ngày "+day+" tháng "+month+" năm "+year +" là không hợp lệ");
            }
        } else if(day>0&&day<29&&year>0){
            console.log("ngày "+day+" tháng "+month+" năm "+year +" là hợp lệ");
        } else{
            console.log("ngày "+day+" tháng "+month+" năm "+year +" là không hợp lệ");
        }
        break;
    case 4: case 6: case 10: case 12:
        if(day>0&&day<31&&year>0){
            console.log("ngày "+day+" tháng "+month+" năm "+year +" là hợp lệ");
        } else{
            console.log("ngày "+day+" tháng "+month+" năm "+year +" là không hợp lệ");
        }
        break;
        default:
            console.log("ngày "+day+" tháng "+month+" năm "+year +" là không hợp lệ");
            break;
}