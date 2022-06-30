function main() {
    var input_1 = prompt("لطفن سال تولد خودرا به یکی از حالات زیر وارد کنید====>>  1:میلادی2:شمسی")

    var input_2 = prompt("سال تولد : ")

    if (input_1 == 1) {
        miladi();
        document.write("*******" + "سن شما : " + miladi() + "*******" + "سن شما در 56 سال دیگر : " + (miladi() + 56) + "*******");
        document.write("\n");
        if (miladi() >= 18 && miladi() <= 20) {
            document.write("\نمیدونی ده سال آینده چه سالهای مهمیه واست هدرش نده ");

        }
    } else if (input_1 = 2) {
        shamsi();
        document.write("*******" + "سن شما : " + shamsi() + "*******" + "سن شما در 56  سال دیگر : " + (shamsi() + 56) + "*******");
        document.write("\n");
        if (shamsi() >= 18 && shamsi() <= 20) {
            document.write("\نمیدونی ده سال آینده چه سالهای مهمیه واست هدرش نده ");
        }
    }

    function miladi() { return Number(2022 - input_2); }

    function shamsi() { return Number(1401 - input_2) }
}