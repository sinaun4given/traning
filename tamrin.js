function main() {
    let input_1 = prompt("لطفن عدد اول را بنویسید : ");
    let func = prompt("1= *   2= /   3= -  4= +");

    let input_2 = prompt("لطفن عدد دوم را بنویسید : ");


    if (func == 1) { zarb(); } else if (func == 2) { divid(); } else if (func == 3) { mines(); } else if (func == 4) { plus(); }


    function plus() {
        let pluss = Number(input_1) + Number(input_2);
        document.write(pluss);
    }

    function mines() {
        let miness = Number(input_1) - Number(input_2);
        document.write(miness);
    }

    function divid() {
        let dividd = Number(input_1) / Number(input_2);
        document.write(dividd);
    }

    function zarb() {
        let zarbb = Number(input_1) * Number(input_2);
        document.write(zarbb);
    }


}