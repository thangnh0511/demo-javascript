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



function chuNhat(width, height) {
    let mess ='';
    for(let i=1; i<=width; i++) {
        for(let j=1; j<=height; j++) {
            mess += '*';
        } 
        mess +='\n';
    }
    console.log(mess);
}

chuNhat(10,20)



function chuNhatRong(width, height) {
    let mess = '';
    for(let i=1; i<= width; i++){
        mess += "*";
        for(let j=1; j<= height; j++){
            if(i==width || i==1){
                mess += "*";
            } else {
                mess += " ";
            }
        }
        mess +="*\n";
    }
    console.log(mess);
}

// ------------------ Fibo --------------------
chuNhatRong(20,50);



const FIBO = (number) => {
    let fibo =[0,1];
    let mess = '0, 1, ';
    for(let i=1; i<= (number-2); i++) {
        // console.log(fibo[i]);
        fibo.push(fibo[i-1]+fibo[i]);
        mess += ', '+ fibo[i-1]+fibo[i];
    }
    console.log('Bài tập 1 - ' + '\t' + fibo);
    // document.getElementById('text-result-fibo').innerHTML=mess;
}

FIBO(30);

// ----------------------------------------------
// ------------- FIBONACI -----------------------
const FIBONACI = (number) => {
    if(number === 1) {
        return 0;
    } else if (number < 3 && number > 1){
        return 1;
    } else if (number <= 0) {
        return 'ERROR';
    } else {
        return FIBONACI(number-1) + FIBONACI(number -2 );
    }
}

function outFibo(value) {
    let mess = '';
    for(let i=1; i<value; i++) {
        mess += ', '+ FIBONACI(i);
    }
    console.log(mess);
}

outFibo(40);
// -------------------------- END FIBONACI ---------------
// -------------- SỐ CHIA HẾT CHO 7 -----------------
const chiaHet7 = (number) => {
    if(number%7 === 0) {
        return 0 ;
    } else {
        return -1 ;
    }
}

function outChiaHet7(value) {
    let count = 1; 
    let arr = [];
    for(let i=1; i<=10000; i++){
        if(chiaHet7(i) === 0) {
            if(count > value) {
                break;
            } else {
                arr.push(i);
                count++; 
            }
        }
    }    
    console.log('Bài tập 2 - ' + arr);
}

outChiaHet7(30);



// ----------- Hình tam giác ---------------
function veTamGiac(number) {
    let mess ='';
    for(let i=1; i<number; i++){
        for(let j=1; j<=i ; j++){
            mess += '* ';
        } 
        mess += '\n';
    }
    console.log(mess);
    document.getElementById('text-result-fibo').innerHTML = mess;
}

veTamGiac(10);



//  Do - While 
function sumUntil() {
    let temp = '';
    while(temp<=20 || temp >=100) {
        temp = +prompt('Nhập nhiệt độ');
        if(temp < 20) {
            alert('Tăng nhiệt');
        } else {
            alert('giảm nhiệt');
        }
    }
    document.getElementById('reusult-sum').innerHTML = sum;
}