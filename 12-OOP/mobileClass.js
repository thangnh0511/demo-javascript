/* 
Mô tả
Viết một lớp các đối tượng điện thoại lấy tên là Mobile, mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:

Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv)

Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.

Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.

Có một vùng nhớ dùng để lưu tin nhắn đã gửi.

Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.

Có chức năng bật và tắt điện thoại.

Có chức năng xạc pin điện thoại.

Có chức năng soạn tin nhắn.

Có chức năng nhận tin nhắn từ một chiếc mobile khác.

Có chức năng gửi tin nhắn tới một chiếc mobile khác.

Có chức năng xem tin trong hộp thư đến.

Có chức năng xem tin đã gửi.

Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
Các chức năng không thể hoạt động nếu điện thoại chưa bật.

Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:

Có một chiếc điện thoại nokia và một chiếc iphone

Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ và gửi cho chiếc iphone

Chiếc iphone kiểm tra inbox và hiển thị tin đó.


-------------------------------------------------------------------------------------

Yeu cau:

1. doc bai va xac dinh ten lop, cac thuoc tinh, cac chuc nang cua lop dien thoai (10p)
    - Thuộc tính: 
        + Pin (max 100)
        + message (string)
        + inbox (array)
        + outbox (array)
        + status (true bat, false - tat)
    - Phương thức: 
        + TurnOn();
        + TurnOff();
        + chargeBattery();
        + writeMessage(text);
        + sendMessage(phone);
        + readInbox();
        + readOutbox();

2. Ve ra giay so do lop Mobile (10p)

3. Xay dung lop Mobile
*/


const MAX_PIN = 100;

class Mobile {
    constructor(name) {
        this.battery = MAX_PIN;
        this.message = '';
        this.inbox = [];
        this.outbox = [];
        this.status = Boolean;
        this.name = name;
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    chargeBattery() {
        this.battery++;
    }

    writeMessage(text) {
        this.message = text;
    }

    sendMessage(phone) {
        phone.inbox.push(this.message);
        this.outbox.push(this.message);
    }

    readInbox() {
        for(let i=0; i < this.inbox.length; i++){
            document.write(this.inbox[i] +"<br>");
        }
    }
}

let iphone13 = new Mobile("Iphone 13");
let samsungNote10 = new Mobile("SS Note 10");

iphone13.writeMessage("hello");
iphone13.sendMessage(samsungNote10);

samsungNote10.readInbox();