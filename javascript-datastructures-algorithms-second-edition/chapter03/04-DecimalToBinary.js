//233 == 11101001
//2x(10x10) + 3x(10) + 3x(1)

function divideBy2(decNumber) {

    var remStack = new Stack(),
        rem,
        binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));

/*
    The folow algorithm converts from base 10 to any base
 */
function Stack() {

    let items = [];

    this.push = function(element) {
        items.push(element);
    };

    this.pop = function() {
        return items.pop();
    };

    this.peek = function() {
        return items[items.length - 1];
    };

    this.isEmpty = function() {
        return items.length == 0;
    };

    this.size = function() {
        return items.length;
    };

    this.clear = function() {
        items = [];
    };

    this.print = function() {
        console.log(items.toString());
    };

    this.toString = function() {
        return items.toString();
    };
}

function baseConverter(decNumber, base) {

    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

    // continue to store the result each time in the array
    while (decNumber > 0) {
        console.log('decNumber', decNumber);
        console.log('OPERATION : rem = Math.floor(' + decNumber + ' % ' + base + ')');
        rem = Math.floor(decNumber % base);
        console.log('rem', rem);
        console.log('OPERATION : remStack.push(rem)');
        remStack.push(rem);

        console.log('OPERATION : decNumber: ' + decNumber + ' =' + ' Math.floor(' + decNumber + ' / ' + base + ')');
        decNumber = Math.floor(decNumber / base);

        console.log('\n')

    }

    // continue to poping the result each time of the array
    // and then adding the value to the baseString variable
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
        //console.log("pop", digits[remStack.pop()]);
        console.log('baseString', baseString);
    }
    return baseString;
}

baseConverter(255, 16);