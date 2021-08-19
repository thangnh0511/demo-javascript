

const pi=3.14 ; 

function hinhtron() {
    let r = document.getElementById('r').value;
    let chuvi = 2 * r * pi ;
    let dientich = r**2 * pi ; 
    console.log(chuvi);
    console.log(dientich);
    document.getElementById('result').innerHTML = "chu vi hình tròn - " + chuvi + '<br>' + "diện tích hình tròn - " + dientich ;
}

function marilynMessage() {
    let name = document.getElementById('name').value; 
    let address = document.getElementById('address').value;
    let date = document.getElementById('date').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;


    document.getElementById('marilyn_mess').innerHTML =
    `<p>"<b>${name}</b> thương nhớ,</p><br>
    <p>Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.</p><br>
    <p>Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.</p><br>
    <p>Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.</p>
    <br>
    <p>${address}, ngày ${date} tháng ${month} năm ${year}."</p>`;
}




function currencyExchange() {
    let money = document.getElementById('money').value;
    var exFrom = document.getElementById('exchange-from').value;
    var exTo = document.getElementById('exchange-to').value;

    const exRate = document.getElementById('ex-rate').value;

    if(exFrom === "usd") {
        var exFrom = 1; 
    } else {
        var exFrom = exRate; 
    }

    if (exTo === "usd") {
        var exTo = 1;
    } else {
        var exTo = exRate;   
    }

    console.log(exFrom);
    console.log(exTo);
    let exMoney = +(money*exTo)/exFrom;
    console.log(exMoney);
    document.getElementById('exchange-result').innerHTML = (money*exTo)/exFrom;


}


// AGE CALCULATE
function ageCalc() {
    let myBirthday= document.getElementById('birthday').value;
    let birthday = new Date(myBirthday);
    let today = new Date();
    let myAge = 0;

    if (today.getMonth() > birthday.getMonth()){
        myAge = today.getFullYear() -  birthday.getFullYear(); 
        console.log('cái này true');
    } else {
        if(today.getDate() >= birthday.getDate()){
            myAge = today.getFullYear() -  birthday.getFullYear(); 
        } else {
            myAge = (today.getFullYear() -  birthday.getFullYear()) - 1; 
        }
    }
    console.log(typeof myAge);

    
    document.getElementById('age')
    document.getElementById('age').innerHTML = '<b>' +  myAge + '</b>';
}


// Tinh toan 
function calculate() {
    let num1 = document.getElementById('calc-1').value;
    let toanTu = document.getElementById('calc-2').value;
    let num2 = document.getElementById('calc-3').value;

    result = eval(num1 + toanTu + num2);

    const phepChia = "/";
    if (toanTu == "/" && num2 == 0) {
        alert('Không tính được');
        return;
    } 

    document.getElementById('calc-result').innerHTML = result;

}



// Máy tính     

function enterInput (key) {
    document.getElementById('showCalc').innerHTML += key;
}

function reset() {
    document.getElementById('showCalc').innerHTML = '';
}


function calculating() {
    let result = document.getElementById('showCalc').innerHTML;
    document.getElementById('showCalc').innerHTML = eval(result);
   
}

