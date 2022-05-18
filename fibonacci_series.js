function sumOddFibs(num) {
    function fibNums(count) {
        var fibArr = [], previous = 0, current = 1;
        for (var i = 0; i < count; i++) {
            fibArr.push(current);
            current += previous;
            previous = fibArr[fibArr.length - 1];
        }
        return fibArr;
    }
    return fibNums(num)
        .filter(oddity => (oddity % 2 == 1))
        .reduce((total, item) => total + item, 0);
}

console.log(sumOddFibs(10))