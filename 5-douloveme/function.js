function changePositionBtn() {
    let xbtn = Math.floor((Math.random() * 500)+1) +'px';
    let ybtn =  Math.floor((Math.random() * 500)+1) +'px';
    document.getElementById('no').style.left = xbtn;
    document.getElementById('no').style.top = ybtn;

    console.log('Tọa độ: ' + xbtn + '; ' + ybtn);
    

}