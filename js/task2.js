function main(number, f) {
    if (f === undefined) {
        return number;
    } else {
        return f(number);
    }

}

function zero(argument) {
    return makeNum(0, argument);
}

function one(argument) {
    return main(1, argument);
}


function two(argument) {
    return main(2, argument);
}

function three(argument) {
    return main(3, argument);
}

function four(argument) {
    return main(4, argument);
}

function five(argument) {
    return main(5, argument);
}

function six(argument) {
    return main(6, argument);
}

function seven(argument) {
    return main(7, argument);
}

function eight(argument) {
    return main(8, argument);
}

function nine(argument) {
    return main(9, argument);
}


function plus(x) {
    return y => y + x;
}

function minus(x) {
    return y => y - x;
}

function times(x) {
    return y => y * x;
}

function divided(x) {
    return y => y / x;
}
function checkCalculations() {
    return nine(minus(three()));
}


