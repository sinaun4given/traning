var right = prompt("enter first : ")
var left = prompt("enter right : ")
var calc = {

    input_1: right,
    input_2: left,
    zarb: function() {
        return "zarb : " + this.input_1 * this.input_2
    },
    jam: function() {
        return "jam : " + this.input_1 + this.input_2
    },
    tafrigh: function() {
        return "tafrigh : " + (this.input_1 - this.input_2)
    },
    taqsim: function() {
        return "taghsim : " + this.input_1 / this.input_2
    }


};


console.log(calc.zarb());
console.log(calc.jam());
console.log(calc.tafrigh());
console.log(calc.taqsim());