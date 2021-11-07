export const utilService = {
    makeId,
    makeDate,
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeDate(date) {
    const currentDate = new Date(date)
    const newDateOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }
    return currentDate.toLocaleString("en-GB", newDateOptions);
}

