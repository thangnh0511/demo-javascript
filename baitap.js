// Máy tính cầm tay
function enterInput(value) {
    document.getElementById('result').innerHTML += value;
}

function acButton() {
    document.getElementById('result').innerHTML ='';
}

function executeCalc() { 
    let calcData = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = eval(calcData);
}


// Tính tuổi 
function calcAge() {
    let birthDay = new Date(document.getElementById('age').value);
    let today = new Date();

    age = today.getFullYear() - birthDay.getFullYear();
    if(today.getMonth() >= birthDay.getMonth()){
        if (today.getMonth() > birthDay.getMonth()) {
            document.getElementById('age-result').innerHTML = age;
        } 
    } else {
        document.getElementById('age-result').innerHTML = age-1;
    }
}