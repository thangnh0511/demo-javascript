function moveUp() {
    // slide(start, end) -> cắt chuỗi từ start -> end
    // let currentTop = document.getElementById('tank').style.top;

    let currentTop = parseInt(document.getElementById('tank').style.top)
    console.log(currentTop);

    document.getElementById('tank').style.top = currentTop - 10 +"px";
}


function moveLeft() {
    // slide(start, end) -> cắt chuỗi từ start -> end
    let currentLeft = parseInt(document.getElementById('tank').style.left);

    console.log(currentLeft);

    document.getElementById('tank').style.left = currentLeft - 10 +"px";
}

function moveDown() {
    let currentDown = parseInt(document.getElementById('tank').style.top);
    console.log(currentDown);
    document.getElementById('tank').style.top = currentDown + 10 +"px";
}

function moveRight() {
    let currentRight = parseInt(document.getElementById('tank').style.left);
    console.log(currentRight);
    
    document.getElementById('tank').style.left = currentRight + 10 +"px";
}

function onChangeDemo() {
    alert(1);
}

function onkeyupDemo() {
    let value = document.getElementById('input').value;
    document.getElementById('content').innerHTML = value;
}