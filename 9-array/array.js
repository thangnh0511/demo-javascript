// FOR - IN  -> Duyệt qua các phần tử của mảng -> chỉ số 
let numbers = [1,3,4,5,63,2,3];
for (let number in numbers) {
    console.log(number);
}

// FOR - OF -> Duyệt qua các phần tử của mảng -> giá trị phần tử
console.log('FOR - OF');
for (let number of numbers) {
    console.log(number);
}

// forEach() -> Duyệt lần lượt các phần tử trong mảng từ đầu đến hết, mỗi lần duyệt qua 1 phần tử
console.log('forEach()');
numbers.forEach((value, index) => {
    console.log(index + '-' + value);
})



// Một số thuộc tính và phương thức của mảng 
/* 
    1. length       --> trả về số lượng phần tử - độ dài của mảng 
        + array.length
    2. push(value)  --> thêm một phần tử vào cuối mảng 
        + array.push(value)
    3. join()       --> Chuyển các phần tử trong mảng thành chuỗi và nối chúng lại với nhau
    4. reverse()    --> Đảo ngược mảng
*/

numbers.push(100,101,102);
console.log(numbers);


console.log(numbers.join(' | '));

console.log(numbers.reverse());



// MẢNG 2D 
console.log('\n \n Mảng 2 chiều ----------------');
let array = [
    [1,2,3,4], //1
    [22,11,33,44], //2
    [44,55,69,68] //3
]

let items = [-3,5,100,102];
array.push(items);

for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
        console.log(array[i][j]);
    }
}

for (items of array){
    console.log(items.join(' - '));
}







