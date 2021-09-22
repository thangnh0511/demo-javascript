/*
BT1: viết chương trình đếm tần suất xuất hiện một phần tử trong mảng bất kỳ. 
Ví dụ:
input: arr = [1,2,3,4,2,0,-10,2], x = 2
ouput: phần tử 2 xuất hiện 3 lần
- x = 5 -> không xuất hiện phần tử có giá trị là 5.
*/

function arraySearch(value = [], key) {
    let count = 0;
    for(item of value) {
        if(item == key) {
            count++;
        }
    } 
    if(count == 0){
        return `${key} DO NOT EXIST IN THIS ARRAY !!!`;
    } else {
        return `Number ${key} have ${count} elements in Array`;
    }
}

console.log(arraySearch([1,2,3,4,5,6,4,3,2,2,2,2],2));
console.log(arraySearch([1,2,3,4,5,6,4,3,2,2,2,2],10));

// =========================================================
console.log("\n==============================================");


function arrayIndexOut(value = [], key) {
    let mess = '';
    let count = 0;
    let index = 0;
    for(item of value) {
        if(item == key) {
            mess += ` - ${index}`;
            count++;
        }
        index+= 1;
    } 
    if(count == 0){
        return `${key} NOT EXIST !!!`;
    } else {
        return `Number ${key} have ${mess}`;
    }
}

console.log(arrayIndexOut([1,2,3,4,5,6,4,3,2,2,2,2],2));
console.log(arrayIndexOut([1,2,3,4,5,6,4,3,2,2,2,2],100));



// =========================================================
console.log("\n=============== Ứng dụng từ điển ==============");

/*BT2: Xây dựng ứng dụng từ điển đơn giản Anh - Việt
 - 2 mảng Anh - Việt cùng số lượng phần tử
 - Mỗi phần tử trong 2 mảng này sẽ nghĩa của nhau
  let English = ["Hi","Goodbye","Car"]
  let Vietnam = ["Xin chào", "Tạm biệt", "Xe"]
*/

let eng = ['hello', 'inflation' ,'expenditure'];
let vie = ['xin chào', 'lạm phát', 'chi tiêu'];

//Insert
const insertVoca = (eng_w='', vie_w='') =>{
    eng.push(eng_w);
    vie.push(vie_w);
}

//Edit
const editVoca = (eng_w ='' ,vie_w='') => {
    let index = 0;
    let mess  ='';
    let count =0;
    for(item of eng) {
        if(item == eng_w.toLowerCase()) {
            count++;
            break;
        }
        index++;
    }
    vie[index] = vie_w.toLowerCase();
}

//Search
const dictSearch = (word ='') => {
    let index = 0;
    let mess  ='';
    let count =0;
    for(item of eng) {
        if(item == word.toLowerCase()) {
            count++;
            break;
        }
        index++;
    }
    if(count==0){
        return `${word.toUpperCase()} NOT AVAILABLE !!!`;
    } else {
        return `${vie[index].toUpperCase()}`;
    }
}


insertVoca('bye', 'tạm biệt');
insertVoca('namaste', 'chịu')
console.log(dictSearch('EXPENditure'));

editVoca('namaste', 'Chào kiểu Ấn');

console.log(eng);
console.log(vie);


function translateEnglish() {
    let word = document.getElementById('eng-word').value;
    document.getElementById('word-result').innerHTML =  dictSearch(word);
}

function editWord() {
   
}
function addWord() {
   
}


// =========================================================
console.log("\n=============== Đưa ra giá trị lớn thứ 2 trong mảng ==============");
/*
BT3: Viết chương trình đưa ra phần tử có giá trị lớn thứ 2 trong mảng.
input: arr = [3,5,2,1,10,-1];
output: 5
*/
const MAX = (arr) => {
    let max=arr[0];
    let max2=arr[0];
    for(let i=1; i<=arr.length; i++){
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(MAX([1,2,3,7,4,8,5,6]));


function secondMax(arr) {
    let max1 = MAX(arr);
    arr.splice(arr.indexOf(max1),1);
    let max2 = MAX(arr);
    return max2;
}

console.log(secondMax([1,2,3,7,4,8,5,6]));