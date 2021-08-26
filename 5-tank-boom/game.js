function moveUp() {
    // slide(start, end) -> cắt chuỗi từ start -> end
    // let currentTop = document.getElementById('tank').style.top;

    let currentTop = parseInt(document.getElementById('tank').style.top)
    console.log(currentTop);

    document.getElementById('tank').style.top = currentTop - 10 +"px";
    exploreTank()
}


function moveLeft() {
    // slide(start, end) -> cắt chuỗi từ start -> end
    let currentLeft = parseInt(document.getElementById('tank').style.left);

    console.log(currentLeft);

    document.getElementById('tank').style.left = currentLeft - 10 +"px";
    exploreTank()
}

function moveDown() {
    let currentDown = parseInt(document.getElementById('tank').style.top);
    console.log(currentDown);
    document.getElementById('tank').style.top = currentDown + 10 +"px";
    exploreTank()
}

function moveRight() {
    let currentRight = parseInt(document.getElementById('tank').style.left);
    console.log(currentRight);
    
    document.getElementById('tank').style.left = currentRight + 10 +"px";
    exploreTank()
}

// Xử lý va chạm 
function exploreTank() {
    let touchTime = +document.getElementById('touch').innerHTML;
    console.log(touchTime);

    let tankLeft = parseInt(document.getElementById('tank').style.left);
    let tankRight = 500 - (tankLeft +50);
    let tankTop = parseInt(document.getElementById('tank').style.top);
    let tankBottom = 500 - (tankTop + 50);

    let boomLeft = parseInt(document.getElementById('boom').style.left);
    let boomTop = parseInt(document.getElementById('boom').style.top);
    let boomRight = 500 - (boomLeft + 10);
    let boomBottom = 500 - (boomTop + 10);

    let xting = tankLeft-boomLeft;
    let yting = tankTop -boomTop;

    console.log('tọa độ :' +'('+ xting +';' + yting +')');

    // if (tankLeft-boomLeft<=0 &&  )

    console.log('Tọa độ tank : '+tankRight + ';' + tankLeft +';' +tankTop + ';' +tankBottom);
    console.log('Tọa độ boom : '+boomRight + ';' + boomLeft +';' +boomTop + ';' +boomBottom);

    if((xting <=6 && xting >= -50) && (yting<=6 && yting>=-50)){
        console.log("game over");
        document.getElementById('boom').style.top = randomBoom();
        document.getElementById('boom').style.left = randomBoom();
        touchTime += 1; 
        document.getElementById('touch').innerHTML = touchTime;
    }
}

function randomBoom() {
    let boom = Math.floor((Math.random() *200)+10) + 'px';
    return boom;
}


exploreTank();


function onChangeDemo() {
    alert(1);
}

function onkeyupDemo() {
    let value = document.getElementById('input').value;
    document.getElementById('content').innerHTML = value;
}

