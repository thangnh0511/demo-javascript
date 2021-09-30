let products = [
    ['Iphone X', 9800000, 'Apple'],
    ['Iphone 13', 35000000, 'Apple'],
    ['Iphone 6s', 3000000, 'Apple'],
    ['Mi Mix', 12000000, 'Xiaomi'],
    ['Mi band 6', 600000, 'Xiaomi'],
    ['Iphone 13', 35000000, 'Apple'],
    ['Quẩy hậu dịch', 'Why not ?', 'Nam House'],
    ['Iphone 6s', 3000000, 'Apple'],
    ['Mi Mix', 12000000, 'Xiaomi'],
    ['Mi band 6', 600000, 'Xiaomi'],
    ['Iphone 13', 35000000, 'Apple']
    
]

const BUTTON__STATUS = {
    initial: {
        add: 'active',
        save: 'disable',
        update: 'disable',
        delete: 'disable'
    },
    updateItem: {
        add: 'active',
        save: 'disable',
        update: 'active',
        delete: 'active'
    }, 
    addItem : {
        add: 'active',
        save: 'active',
        update: 'disable',
        delete: 'disable'
    }
}

function showListProduct() {
    let html = '';
    for(let i = 0; i<products.length; i++){
        html += `<div class="catalogue-list not-choice" id="item-${i}" onclick="getInfoConsole(${i})">
            <div id="id">${i+1}</div>`;
        for(let j=0; j<products[0].length; j++) {
            if(!(j==2)){
                html += `<div class="text-align-left catalogue-item">${products[i][j]}</div>`;
            } else {
                html += `<div class="catalogue-item">${products[i][j]}</div>`;
            }
            // html += `<div class="catalogue-item">${products[i][j]}</div>`;
        }
        // html += `<div class="catalogue-item">
        // <i class="delete far fa-trash-alt"></i>                
        // <i class="update far fa-edit"></i>
        // </div>`;
        html += `</div>`;
    }
    // console.log(html);
    document.getElementById("products-list").innerHTML = html;

    statusButtonSet('initial');
}

showListProduct();

// ----------------- Choice Product to process ----------------
function getInfoConsole(index){
    document.getElementById('prd-name').value = products[index][0];
    document.getElementById('prd-price').value = products[index][1];
    document.getElementById('prd-auth').value = products[index][2];
    // console.log(index);
    
    let elementId = 'item-' + index;
    showListProduct();
    document.getElementById(elementId).className = 'catalogue-list choice-item';

    statusButtonSet('choiceItem');

    document.getElementById('prd-name').setAttribute('dataId',index);
}


// ----------------- Delete Product -------------------
function deteleItem() {
    let index = document.getElementById('prd-name').getAttribute('dataId');
    console.log(index);
    // Xóa phần tử trong mảng đưa vào index
    // index = getInfoConsole()
    if(confirm('Bạn chắc chắn muốn xóa không')){
        products.splice(index,1);
        // gọi lại hàm showProducts
        // clearScreen();
        showListProduct();
        clearScreen();
    }
    console.log('DELETE FUNCTION - working ok');
}

// ----------------- Update Product ------------------
function updateItem() {
    let index = document.getElementById('prd-name').getAttribute('dataId');
    let name = document.getElementById('prd-name').value;
    let price = document.getElementById('prd-price').value;
    let auth = document.getElementById('prd-auth').value;

    let product = [name, price, auth];

    products[index] = product;

    clearScreen();
    showListProduct();

    console.log('UPDATE FUNCTION - working ok');
}


// ----------------- Add Product --------------------
function addItem() {
    let index = document.getElementById('prd-name').getAttribute('dataId');
    statusButtonSet('addItem');
    clearScreen();
}

function saveItem() {
    let name = document.getElementById('prd-name').value;
    let price = document.getElementById('prd-price').value;
    let auth  = document.getElementById('prd-auth').value;

    let product = [name, price, auth];

    console.log(product);
    products.push(product);

    showListProduct();
    statusButtonSet('initial');
    clearScreen();
}


// ------------- Disable & Active button ----------------
function statusButtonSet(br){
    let addStatus = '';
    let addFunction = 'addItem()';

    let saveStatus = '';
    let saveFunction = 'saveItem()';

    let updateStatus = '';
    let updateFunction = 'updateItem()';

    let deleteStatus = '';
    let deleteFunction = 'deteleItem()';

    if(br === 'initial'){
        addStatus = BUTTON__STATUS.initial.add;
        saveStatus = BUTTON__STATUS.initial.save;
        updateStatus = BUTTON__STATUS.initial.update;
        deleteStatus = BUTTON__STATUS.initial.delete;

        saveFunction = '';
        updateFunction = '';
        deleteFunction = '';

    } else if (br === 'choiceItem') {
        addStatus = BUTTON__STATUS.updateItem.add;
        saveStatus = BUTTON__STATUS.updateItem.save;
        updateStatus = BUTTON__STATUS.updateItem.update;
        deleteStatus = BUTTON__STATUS.updateItem.delete;

        saveFunction = '';

    } else if (br === 'addItem') {
        addStatus = BUTTON__STATUS.addItem.add;
        saveStatus = BUTTON__STATUS.addItem.save;
        updateStatus = BUTTON__STATUS.addItem.update;
        deleteStatus = BUTTON__STATUS.addItem.delete;

        updateFunction = '';
        deleteFunction = '';
    }


    document.getElementById('btn-field-js').innerHTML= 
    `<span class="btn-function ${addStatus}" id="add" onclick="${addFunction}">
    <img src="./icon/add.svg" alt="">
    Add Product
    </span>
    <span class="btn-function ${saveStatus}" id="save" onclick="${saveFunction}">
        <img src="./icon/save.svg" alt="">
        Save
    </span>
    <span class="btn-function ${updateStatus}" id="update" onclick="${updateFunction}">
        <img src="./icon/update.svg" alt="">
        Update
    </span>
    <span class="btn-function ${deleteStatus}" id="delete" onclick="${deleteFunction}">
        <img src="./icon/delete.svg" alt="">
        Delete 
    </span>`;
}


// ------------- Clear -------------
function clearScreen() {
    document.getElementById('prd-name').value = null;
    document.getElementById('prd-price').value = null;
    document.getElementById('prd-auth').value = null;
}



// ---------------------------------------------------------------------------------
// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.
// Gọi hàm vừa xây dựng được.

function giaiThua(number){
    if(number == 1){
        return 1; 
    } else {
        return number*giaiThua(number-1);
    }
}

console.log(giaiThua(5));

// ----------------------------------------------------------------------------------
// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, 
// kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về - 1.
// co the tra ve vi tri cua phan tu do

function numberLoopCheck(arr, number){
    let count = 0;
    let mess = '';
    for(item in arr) {
        if(arr[item] == number) {
            count++;
            mess +=`arr[${item}] \n`;
        } 
    }    

    if(count!=0){
        console.log(mess);
        return count;
    } else {
        return 0;
    }
}

console.log(numberLoopCheck([1,2,3,4,2,1,2,3,4],100));
console.log(numberLoopCheck([1,2,3,4,2,1,2,1,4],1));
