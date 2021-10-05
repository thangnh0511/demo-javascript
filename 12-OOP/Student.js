/*
Xây dựng 1 lớp student có thuộc tính name, email, group, address
- Phương thức showInfo() trả về thông tin sinh viên.
*/

// Khai báo lớp - class + nameClass
class Student {
    // Constructor là một phương thức đặc biệt -> Khởi tạo đối tượng -> auto chạy khi khởi tạo đối tượng
    constructor(name, email, group, address) {
        // Khai báo thuộc tính - this.name = value
        /* 
            note: từ khóa this - đây là con trỏ, nó sẽ trỏ về cái đối tượng hiện tại mà mình đang tác động
            this.name -> khai báo thuộc tính tên name cho nhóm đối tượng Student
        */
        this.name = name;
        this.email = email;
        this.group = group;
        this.address = address;
    }

    // Khai  báo phương thức
    getInfo() {
        return "Name: " + this.name + " Email: " + this.email + " Group: "+ this.group;
    }
}

// Tạo 1 đối tượng cụ thể
// Từ khóa new dùng để khởi tạo đối tượng từ lớp
let student1 = new Student("Thang", "thang@gmail.com", "PF2107", "Đà Nẵng");
let student2 = new Student("Rutor", "#%#@@!#g@gmail.com", "PF2107", "Đà Nẵng");
let student3 = new Student("Susan", "#$#$g@gmail.com", "PF2107", "Đà Nẵng");
let student4 = new Student("Hello", "HLLOg@gmail.com", "PF2107", "Đà Nẵng");

document.write(student1.getInfo());
