let products = [
    ['Iphone X', 9800000, 'Apple'],
    ['Iphone 13', 35000000, 'Apple'],
    ['Iphone 6s', 3000000, 'Apple'],
    ['Mi Mix', 12000000, 'Xiaomi'],
    ['Mi band 6', 600000, 'Xiaomi']
]

function showListProduct() {
    let html = '';
    for(let i = 0; i<products.length; i++){
        html += `<div class="catalogue-list">
            <div class="catalogue-item">${i+1}</div>`;
        for(let j=0; j<products[0].length; j++) {
            html += `<div class="catalogue-item">${products[i][j]}</div>`;
        }
        html += ` <div class="catalogue-item">
        <button class="btn btn-delete">Delete</button>
        <button class="btn btn-update">Update</button>
        </div>`;
        html += `</div>`;
    }
    console.log(html);
    document.getElementById('products-list-custom').innerHTML = html;
}


