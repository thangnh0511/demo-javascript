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
                }
                count++;
            } else if(ARRAY__BOARD[e0][e1]!= checkKey && count < 6) {
                count = 1;
            } 
        }
        // console.log(`count ` + count);
        return count;
        // console.log(ARRAY__BOARD);
    // } console.log(ARRAY__BOARD);
    } else {
        return 0;
    }
}


