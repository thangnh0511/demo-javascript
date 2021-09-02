/*
let count = 0; 
let mess = '';
for(let i=1; i<=100; i++) {
    if(i%3==0 && i%5==0){
        mess +=`<span style='color:green;'>fizz-buzz</span>`;
    } else if(i%5==0){
        mess +=`<span style="color:red;">buzz</span>`;
    } else if(i%3==0){
        mess +=`<span style='color:blue;'>fizz</span>`;
    } else {
        mess += i;
    }
    mess += ' ';
}
document.getElementById('text-result').innerHTML = mess;
*/

// window.addEventListener('keyup', function(even) {
//     let mess = '';
//     console.log(even.key);
//     let number = parseInt(even.key);
//     if(number != NaN && number > 1){
//         if(number%1==0 && number%number == 0 ||number%2 !=0){
//             mess = `<span style="color:red;">Số ${number} là Số Nguyên tố !!!</span>`;
//         } else {
//             mess = `<span style="color:green;">Số ${number} không phải là Số Nguyên tố !!!</span>`;
//         }
//     } else {
//         mess = `<span style="color:green;">ký tự ${even.key} không phải là Số. Hãy nhập số !!!</span>`
//     }
//     this.document.getElementById('text-result').innerHTML = mess;
// })

/*
function soNguyenTo(){
    let number = +document.getElementById('number-input').value;
    let mess = '';
    console.log(number);
    if(number<2){
        if(number==2){
            mess = `<span style="color:red;">Số ${number} là Số Nguyên tố !!!</span>`;
        } else {
            mess = `<span style="color:red;">Số ${number} không phải là Số Nguyên tố !!!</span>`;
        }
    } else if(number%2 != 0) {
        for(let i=3; i<(number-1); i+=2){
            if(number%i ==0) {
                mess=  mess = `<span style="color:red;">Số ${number} là Số Nguyên tố !!!</span>`;
            } else {
                mess = `<span style="color:green;">Số ${number} Không phải là số nguyên tố !!!</span>`;
            }
        }
    } else {
        mess = `<span style="color:green;">Số ${number} Không phải là số nguyên tố !!!</span>`;
    }
    document.getElementById('text-result').innerHTML = mess;
} */


// KIEM TRA THANG
const MONTH_CHECK = (value) => {
    let mess;
  switch (value) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      mess = 31;
      break;
    case 2:
      mess = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      mess = 30;
      break;
    default:
      mess = -1;
      break;
  }
  return mess;
};

// KIEM TRA SO NGUYEN 
const CHECK_SO_NGUYEN = (value) => {
    if(value < 2) {
        return -1;
    } else if(value ==2 ){
        return 0;
    } else if (value%2 != 0) {
        for(let i=3; i<= value/2; i += 2){
            if(value%i==0) {
                return -1;
            } 
        } return 0;
    } else {
        return -1;
    }
}

function calendarMaker() {
    let month = +document.getElementById("month").value;
    let cal = '';
    let dayOfMonth = MONTH_CHECK(month);
    if (dayOfMonth == -1) {
       cal='<h1 class="text-result">Error ! Out of Range</h1>'
    } else {
        cal += ` <thead>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th class='text-danger'>Sat</th>
        <th class='text-danger'>Sun</th>
    </thead>`;
    day = dayOfMonth;
    count = 1;
    for (let i = 1; i <= 5; i++) {
    cal += `<tr>`;
    for (let j = 1; j <= 7; j++) {
        if (count <= day) {
        cal += `<td>${count}</td>`;
        count++;
        } else {
        break;
        }
    }
    }
    console.log(cal);
    }
    
       
    

    // document.getElementById('month-text').value = mess;
    document.getElementById("calendar").innerHTML = cal;
}

function outSoNguyen() {
    let count = 0;
    let mess ='';
    let number = +document.getElementById('number').value;
    for(i=1; i<=10000; i++) {
        if(CHECK_SO_NGUYEN(i) == 0) {
            count+=1;
            if(count%9==0){
                mess+= `<td>${i}<sup style="color:red">${count}</sup></td></tr>`;
            } else {
                mess+= `<td>${i}<sup style="color:red">${count}</sup></td>`;
            }
            console.log(`${count} - ${i}`);
            if(count == number){
                break;
            }
        } else {
            continue;
        }
    } 
    console.log(mess);
    document.getElementById('number-result').innerHTML = mess;
}




// console.log(CHECK_SO_NGUYEN(17));