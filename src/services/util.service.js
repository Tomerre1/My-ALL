export const utilService = {
    makeId,
    makeDate,
    makeDateWithHour,
    getYouTubeId,
    formatYoutubeDuration,
    sortByDate,
    sortByName
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

function makeDateWithHour(d) {
    d = new Date(d);
    return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' +
        d.getFullYear() + ', ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
}

function getYouTubeId(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
}

// convert ISO 8601 duration
function formatYoutubeDuration(youtube_time) {
    const array = youtube_time.match(/(\d+)(?=[MHS])/ig) || [];
    const formatted = array.map(function (item) {
        if (item.length < 2) return '0' + item;
        return item;
    }).join(':');
    console.log('%c  formatted:', 'color: white;background: red;', formatted);
    return formatted;
}

function sortByDate(arr) {
    return arr.sort(function (a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    });
}

function sortByName(arr) {
    return arr.sort(function (a, b) {
        return a.title.localeCompare(b.title, "he")
    });
}
