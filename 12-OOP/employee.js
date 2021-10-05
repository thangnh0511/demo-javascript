class Employee {
    constructor(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    Employee() {
        return [this.id, this.firstName, this.lastName, this.salary];
    }

    getID(){
        return this.id;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    getSalary() {
        return this.salary;
    }

    getAnnualSalary() {
        return this.salary*12;
    }

    raiseSalary(percent) {
        return this.salary*(1+(percent/100));
    }
}

let employ1 = new Employee(99083421, 'Binh', 'Hoa', 1000);
let html = `#${employ1.getID()}\n${employ1.getName()}\nSalary: ${employ1.getSalary()}\nAnnual Salary: ${employ1.getAnnualSalary()}`;
alert(html);