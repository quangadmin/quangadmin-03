alert("thông tin quan trọng");
let soNguyen = Number(prompt("vui lòng nhập số nguyên dường"));
if(soNguyen>=18){
    alert("bạn đã đủ tuổi đi tò");
}else if(soNguyen<18){
    alert("bạn chưa đủ tuổi đi tò");
}else if(soNguyen<0){
    alert("vui lòng nhập tuổi bằng só nguyên dương");
    soNguyen = Number(prompt("vui lòng nhập số nguyên dường"));
    if(soNguyen>=18){
        alert("bạn đã đủ tuổi đi tò");
    }else if(soNguyen<18){
        alert("bạn chưa đủ tuổi đi tò");
    }
}
function data (){
    let date = new Date();
    date.getTime();
    if(data.getTime()>28){
        alert("profile information of you. us to fix");
    }
}