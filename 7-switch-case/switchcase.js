function month() {
    let month = +prompt("nhập vào tháng :");

    switch (month) {
        case 1: 
        case 3: 
        case 5: 
        case 7: 
        case 9:
        case 11: 
            alert("có 31 ngày");
            break;
        case 2: 
            alert('Có 28 hoặc 29 ngày');
            break;
        case 4: 
        case 6: 
        case 8: 
        case 10: 
            alert('có 30 ngày');
            break;
        default:
            alert('Đầu vào không hợp lệ');
    }
}


window.addEventListener('keyup', function(even) {
    console.log(even.key);
    let number = even.key; 
    let message ='bạn đã nhấp vào phím '
    switch(number){
        case '1': 
            message+= number;
            break;
        case '2':
            message+= number;
            break;
        case '3': 
            message+= number;
            break;
        case '4':
            message+= number;
            break;
        case '5': 
            message+= number;
            break;
        case '6':
            message+= number;
            break;
        case '7': 
            message+= number;
            break;
        case '8':
            message+= number;
            break;
        case '9': 
            message+= number;
            break;
        case '0':
            message+= number;
            break;
        default:
            message = `chữ <strong><u>${number.toUpperCase()}</u></strong> là <u>${npa(number)}</u>`;
    }
    this.document.getElementById('result').innerHTML = message;
})


function npa(value) {
    let text = value;
    let mess = '';

    switch(text) {
        case 'u':
        case 'e':
        case 'o':
        case 'a':
        case 'i':
            mess= 'NGUYÊN ÂM !!!';
            break;
        default:
            mess= 'PHỤ ÂM !';
            break;
    }
    return mess;
    // document.getElementById('text-result').innerHTML= mess;
}