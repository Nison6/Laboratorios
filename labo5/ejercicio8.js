function binary(dec) {
    var bin = [];
    var dividend = dec;
    var remainder = 0;
    while (dividend >= 2) {
        remainder = dividend % 2;
        bin.push(remainder);
        dividend = (dividend - remainder) / 2;
    }
    bin.push(dividend);
    bin.reverse();
    console.log(bin.join(""));
}

binary(5);