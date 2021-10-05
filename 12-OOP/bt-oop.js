class temperature {
    constructor(temp) {
        this.tempC = temp
    }

    convertTempF() {
        return this.tempC * 1.8 + 32;
    }

    convertTempK() {
        return this.tempC + 273.15
    }
}


let value = +prompt("Nhiet do");
let temp = new temperature(value);
alert(value + ' oC = ' + temp.convertTempF() + " oF" );