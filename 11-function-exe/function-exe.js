let products = [
    ["Iphone 13", 20000000, "Apple"],
    ["Iphone X", 6000000, "Apple"],
    ["Air Pod", 5000000, "Apple"],
    ["Iphone 6s", 6000000, "Apple"],
    ["Iphone 5s", 5000000, "Apple"],
]

function showListProduct() {
    let html = '';
    for (let i=0; i<products.length; i++){
        html += '<tr>';
        html += `<td>${i+1}</td>`;
        for (let j=0; j<products[0].length; j++){
            html += '<td>';
            html += products[i][j];
            html += '</td>';
        }
        html += `<td><button onclick="deleteProduct(${i})" class="btn btn-delete">DELETE</button>`
        html += `<button onclick="updateProduct(${i})" class="btn btn-update">UPDATE</button></td>`
        html += '</tr>';
    }

    document.getElementById('list-product').innerHTML = html;

}

showListProduct();

function deleteProduct(index) {
    // Xóa phần tử trong mảng đưa vào index
    if(confirm('Bạn chắc chắn muốn xóa không')){
        products.splice(index,1);
        // gọi lại hàm showProducts
        showListProduct();
    }
    
}


function addProduct() {
    // Lấy đc giá trị từ các input
    let name = document.getElementById('prd-name').value;
    let price = document.getElementById('prd-price').value;
    let auth = document.getElementById('prd-auth').value;

    // Thêm vào mảng 
    let product = [name, price, auth];
    products.push(product);


    // Gọi lại hàm showListProduct()
    showListProduct();

    // Clear lại các ô input

    clearInput(['prd-name', 'prd-price', 'prd-auth']);
}

function clearInput(list) {
    for(items of list) {
        document.getElementById(item).innerHTML = '';
    }
}


function updateProduct(index) {
    // Lấy phần tử update 
    let productUpdate = products[index];

    // Thêm vào mảng
    document.getElementById('prd-name').value = productUpdate[0];
    document.getElementById('prd-price').value = productUpdate[1];
    document.getElementById('prd-auth').value = productUpdate[2];

    // Show nut update
    document.getElementById('btn-update').hidden = false;
    document.getElementById('btn-add').hidden = true;

    document.getElementById('btn-update').setAttribute('data-id',index);
}


function editProduct(index) {{
    // Lấy được giá trị từ các input
    let name = document.getElementById('prd-name').value;
    let price = document.getElementById('prd-price').value;
    let auth = document.getElementById('prd-auth').value;
    let index = document.getElementById('btn-update').setAttribute('data-id');

    // Them vào mảng 
    let product = [name, price, auth];
    products[index] = product;

    // Gọi lại hàm showListProduct();
    showListProduct();

    // clear lại các ô input
    clearInput();

    document.getElementById('btn-update').hidden = true;
    document.getElementById('btn-add').hidden = false;
}}