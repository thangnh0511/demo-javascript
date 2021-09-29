const ROWS = 10;
const CELLS = 10;
let ARRAY__BOARD = [];

let player = 1; 

function displayGameBoard() {
    let html = '';
    for(let i=0; i<ROWS; i++){
        ARRAY__BOARD[i] = [];
        html += '<tr>';
        for(let j=0; j<CELLS; j++ ){
            html += `<td id="cell-${i}-${j}" onclick="play(this, ${i}, ${j})">`;
            html += '</td>';
            ARRAY__BOARD[i][j] = "*";
        }
        html += "</tr>";
    }

    document.getElementById('game-board').innerHTML = html;
}
displayGameBoard();
console.log(ARRAY__BOARD);


// ========================================================
/*
Step 1: Check around the point need to check, functions will run and RETURN ARRAY OF input point
    ex: input [5,5] -> [0,5], [1,5], ...... accordion
Step 2: CHECK_WIN function let input from 4 function beside and return count of checkpoint 
    if this input point is frequently appear for 5 will return WIN
    if input point will not -> count again from ONE 
Step 3: Collect All in to GameOver function 

*/

function play(element, x, y) {
    if(ARRAY__BOARD[x][y] == "*"){
        if(player == 1) {
            element.innerHTML = `<span class="blue">X</span>`;
            ARRAY__BOARD[x][y] ="X";
            player = 2 ; 
            gameOver("X",x,y);
        } else {
            element.innerHTML = `<span class="red">O</span>`;
            ARRAY__BOARD[x][y] ="O";
            player = 1 ; 
            gameOver("O",x,y);
        }
    }
    console.log("======================");
    console.log(`index: ${x} - ${y}`);
    checkUpDown(x,y);
    checkLeftRight(x,y);
    checkCrossLeftToRight(x,y);
    checkCrossLeftToRight__Reverse(x,y);


    // console.log(arr);
}


function gameOver(player,x,y) {
    CHECK_WIN(checkUpDown(x,y),player);
    CHECK_WIN(checkLeftRight(x,y),player);
    CHECK_WIN(checkCrossLeftToRight(x,y),player);
    CHECK_WIN(checkCrossLeftToRight__Reverse(x,y),player);
}


// This 
// CHECK - UP to DOWN
const checkUpDown = (x, y) => {
    let up=''
    let down='';
    let arrToCheck = [[x,y]];

    // Up
    for(let i=x-1; i>=0; i--){
        up += `- (${i},${y}) `;
        arrToCheck.unshift([i,y]); 
    }
    // Down
    for(let i=x+1; i<ROWS; i++){
        down += `- (${i},${y}) `; 
        arrToCheck.push([i,y]); 
    }
    // console.log(`up -> ${up} \ndown -> ${down}`);
    console.log(arrToCheck);
    return arrToCheck;
}

// CHECK - LEFT to RIGHT
const checkLeftRight = (x,y) => {
    let left ='';
    let right ='';
    let arrToCheck = [[x,y]];

    // Left 
    for(let i=x-1; i>=0; i--){
        left += `- (${i},${y}) `; 
        arrToCheck.unshift([x,i]); 
    }
    // Right
    for(let i=x+1; i<CELLS; i++){
        right += `- (${i},${y}) `; 
        arrToCheck.push([x,i]); 
    }

    // console.log(`left -> ${left} \nright -> ${right}`);
    return arrToCheck;

}

// CHECK - CROSS LEFT to RIGHT
const checkCrossLeftToRight = (x,y) => {
    let crossUp='';
    let crossDown='';
    let arrToCheck = [[x,y]];
    // Up
    for(let ye=y-1, xe=x-1; ye>=0 && xe>=0; ye--, xe--){
        crossUp += `- (${xe},${ye}) `;
        arrToCheck.unshift([xe,ye]); 
    }
    // Down
    for(let ye=y+1, xe=x+1; ye<ROWS && xe<ROWS; ye++, xe++){
        crossDown += `- (${xe},${ye}) `; 
        arrToCheck.push([xe,ye]);
    }

    // console.log(`Cross-Up -> ${crossUp} \nCross-down -> ${crossDown}`);
    return arrToCheck;
}

// CHECK - CROSS LEFT to RIGHT reverse
const checkCrossLeftToRight__Reverse = (x,y) => {
    let crossUp='';
    let crossDown='';
    let arrToCheck = [[x,y]];
    // Up
    for(let ye=y-1, xe=x+1; ye>=0 && xe<ROWS; ye--, xe++){
        crossUp += `- (${xe},${ye}) `; 
        arrToCheck.unshift([xe,ye]); 
    }
    // Down
    for(let ye=y+1, xe=x-1; ye<ROWS && xe>=0 ; ye++, xe--){
        crossDown += `- (${xe},${ye}) `; 
        arrToCheck.push([xe,ye]);
    }

    // console.log(`Cross-up-reverse -> ${crossUp} \nCross-down-reverse -> ${crossDown}`);
    return arrToCheck;
    
}

// CHECK WIN
const CHECK_WIN = (arr,key) => {
    let checkArray = arr;
    let checkKey = key;
    let count=1;
    console.log(checkArray.length);
    if(checkArray.length >= 5){
        for(let i =0; i < checkArray.length; i++){
            let e0 = checkArray[i][0];
            let e1 = checkArray[i][1];
            // console.log(ARRAY__BOARD[e1][e0]);
            console.log(`ARRAY__BOARD[${e0}][${e1}] - ${ARRAY__BOARD[e0][e1]}`);
            if(ARRAY__BOARD[e0][e1] == checkKey && count >= 1){
                if(count ==5){
                    alert("win");
                    document.getElementById('game-board').style.user-select-none;
                    // displayGameBoard();
                }
                count++;
            } else if(ARRAY__BOARD[e0][e1]!= checkKey && count < 6) {
                count = 1;
            } 
        }
        return count;
    } else {
        return 0;
    }
}


// ---------------- BAI TAP FUNCTION --------------------
/*
  BT1: Viet chuong trinh nhap vao tu ban phim 1 nam - kiem tra nam do la nam nhuan hay khong?
  BT2: Viet chuong trinh chuyen doi nhiet do tu F -> C;
  Yeu cau: su dung ham;
  BT3: Viet chuong trinh kiem tra mang doi xung
  vi du: arr = [1,2,3,2,1] -> doi xung
         arr2 = [1,2,3,1] -> khong doi xung

*/


function checkBalanceArray(arr){
    let count = 0;
    for(let i=0; i< (arr.length / 2); i++){
        if(!(arr[i] === arr[arr.length - 1 - i] )){
           return false;
    }
    return true;
}
}

let array = [1,2,3,4,5,6,7,6,5,4,3,2,1];

if(checkBalanceArray(array) == true){
    console.log('Doi Xung');
} else {
    console.log('Khong doi xung');
}


function isPrime(number) {
    if(number <2){
        console.log("number < 2");
        return false;
    } else if(number == 2) {
        return true;
    } else {
        for(let i=2; i < number; i++){
            if(number%i == 0){
                return false;
            }
        }
        return true;

    }
}

isPrime(2);

function displayNumberPrime(number){

}

function minInArray(arr) {
    let  min = arr[0];
    for(item of arr){
        if(item <= min) {
            min = item; 
        }  
    }
    return min;
}

console.log(minInArray([1,2,3,4,2,21,3,0,-1]));