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
            if(!(j==2)){
                html += `<div class="text-align-left catalogue-item">${products[i][j]}</div>`;
            } else {
                html += `<div class="catalogue-item">${products[i][j]}</div>`;
            }
            // html += `<div class="catalogue-item">${products[i][j]}</div>`;
        }
        html += `<div class="catalogue-item">
        <i class="delete far fa-trash-alt"></i>                
        <i class="update far fa-edit"></i>
        </div>`;
        html += `</div>`;
    }
    console.log(html);
    document.getElementById("products-list").innerHTML = html;
}

showListProduct();

