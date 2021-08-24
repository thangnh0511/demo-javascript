const day = {
    1: 28,
    2: 30,
    3: 31
}

function getDateOfMonth() { 
    let month = document.getElementById('input-month').value;
    const monthOutText = `Số ngày của tháng ${month} là: `
    if (month <= 12 && month >= 0) {
        if(month <= 7) {
            if (month == 2) {
                alert(monthOutText + day[1]);
            } else if (month%2) {
                alert(monthOutText + day[3]);
            } else {
                alert(monthOutText + day[2]);
            }
        } 
        else {
            if (month%2) {
                alert(monthOutText + day[2]);
            } else {
                alert(monthOutText + day[3]);
            }
        }
    } else {
        alert('Error Input');
    }
}

 
// =--------------\

let canList = {
    0: 'Canh', 1: 'Tân', 2:'Nhâm', 3:'Quý', 4:'Giáp', 5:'Ất', 6:'Bính', 7:"Đinh", 8:'Mậu', 9:'Kỷ'
}

let chiList = {
    0: 'Thân', 1: 'Dậu', 2:'Tuất', 3:'Hợi', 4:'Tý', 5:'Sửu', 6:'Dần', 7:"Mẹo", 8:'Thìn', 9:'Tỵ', 10: 'Ngọ', 11: 'Mùi'
}

function canChi(date) {
    let birthday = new Date(date) ;
    let birthdayYear = birthday.getFullYear();
    let message='';
    let can = birthdayYear%10;
    let chi = birthdayYear%12


    if (can == 0) {
        message = canList[0];
    } else if (can ==1){
        message = canList[1];
    }
    else if (can ==2){
        message = canList[2];
    }
    else if (can ==3){
        message = canList[3];
    }
    else if (can ==4){
        message = canList[4];
    }
    else if (can ==5){
        message = canList[5];
    }
    else if (can ==6){
        message = canList[6];
    }
    else if (can ==7){
        message = canList[7];
    }
    else if (can ==8){
        message = canList[8];
    }
    else if (can ==9){
        message = canList[9];
    }

    if (chi == 0) {
        message += ' ' +chiList[0];
    } else if (chi==1) {
        message += ' ' + chiList[1];
    } else if (chi==2) {
        message += ' ' + chiList[2];
    } else if (chi==3) {
        message += ' ' + chiList[3];
    } else if (chi==4) {
        message += ' ' + chiList[4];
    } else if (chi==5) {
        message += ' ' + chiList[5];
    } else if (chi==6) {
        message += ' ' + chiList[6];
    } else if (chi==7) {
        message += ' ' + chiList[7];
    } else if (chi==8) {
        message += ' ' + chiList[8];
    } else if (chi==9) {
        message += ' ' + chiList[9];
    } else if (chi==10) {
        message += ' ' + chiList[10];
    } else if (chi==11) {
        message += ' ' + chiList[11];
    } else if (chi==12) {
        message += ' ' + chiList[12];
    }

    return message;
}


function showCanChi() {
    let birthday = document.getElementById('birth-day').value;
    let birthday2 = document.getElementById('birth-day2').value;
    document.getElementById('result').innerHTML = canChi(birthday);
    document.getElementById('result-2').innerHTML = canChi(birthday2);

    document.getElementById('result-3').innerHTML = compare(birthday, birthday2) ;

}   

function compare(date, date2) {
    let birthday = date;
    let birthday2 = date2;

    let chiNam = chi(birthday); 
    let chiNu = chi(birthday2);
    let message = '';

    if (chiNu == chiNam || chiNu == chiNam + (360/12)*3 || chiNu == chiNam + (360/12)*7) {
        message += `<h1 style="text-alignt:center;">Matching</h1><img src="./icon/giphy.gif" alt="" class="result-compare">
        `;
    } else {
        message += `<h1 style="text-alignt:center;">Not Match</h1>
        <img src="./icon/doge.jpg" alt="" class="result-compare">`; 
    }

    return message;
}

function chi(date) {
    let birthday = new Date(date) ;
    let birthdayYear = birthday.getFullYear();
    let chi = (birthdayYear%12 + 1) * (360/12);

    console.log(chi);
    return chi;

    // if (chi == 0) {
    //     message += ' ' +chiList[0];
    // } else if (chi==1) {
    //     message += ' ' + chiList[1];
    // } else if (chi==2) {
    //     message += ' ' + chiList[2];
    // } else if (chi==3) {
    //     message += ' ' + chiList[3];
    // } else if (chi==4) {
    //     message += ' ' + chiList[4];
    // } else if (chi==5) {
    //     message += ' ' + chiList[5];
    // } else if (chi==6) {
    //     message += ' ' + chiList[6];
    // } else if (chi==7) {
    //     message += ' ' + chiList[7];
    // } else if (chi==8) {
    //     message += ' ' + chiList[8];
    // } else if (chi==9) {
    //     message += ' ' + chiList[9];
    // } else if (chi==10) {
    //     message += ' ' + chiList[10];
    // } else if (chi==11) {
    //     message += ' ' + chiList[11];
    // } else if (chi==12) {
    //     message += ' ' + chiList[12];
    // }
}

chi('05/11/1996');