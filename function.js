

const pi=3.14 ; 

function hinhtron() {
    let r = document.getElementById('r').value;
    let chuvi = 2 * r * pi ;
    let dientich = r**2 * pi ; 
    console.log(chuvi);
    console.log(dientich);
    document.getElementById('result').innerHTML = "chu vi hình tròn - " + chuvi + '<br>' + "diện tích hình tròn - " + dientich ;
}

function marilynMessage() {
    let name = document.getElementById('name').value; 
    let address = document.getElementById('address').value;
    let date = document.getElementById('date').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;


    document.getElementById('marilyn_mess').innerHTML =
    `<p>"<b>${name}</b> thương nhớ,</p><br>
    <p>Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.</p><br>
    <p>Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.</p><br>
    <p>Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.</p>
    <br>
    <p>${address}, ngày ${date} tháng ${month} năm ${year}."</p>`;
}