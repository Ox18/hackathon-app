export const convertDolarToPen = (dolar: number, pen: number): string => {
    return Commatize(Number((dolar * pen).toFixed(0)));
}

export const Commatize = (num: number): string => num.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,")

export const numberWithZero = (number: number): string => {
    return number < 10 ? `0${number}` : `${number}`;
}

export const todayData = {
    year: getNumberYearToday(),
    month: getNumberMonthToday(),
    day: getNumberToday()
}

function getNumberYearToday() {
    var today = new Date();
    var year = today.getFullYear();
    return year;
}

function getNumberMonthToday() {
    var today = new Date();
    var month = today.getMonth() + 1;
    return month;
}

function getNumberToday() {
    var today = new Date();
    var day = today.getDate();
    return day;
}