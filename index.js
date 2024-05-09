// QUESTION 97:
function getCurrentDate() {
    let date = new Date();
    let day = String(date.getDay()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
}
let result = getCurrentDate();
console.log(result);
// QUESTION 97:
function dayUntillNewYear() {
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1);
    let diff = newYear.getTime() - today.getTime();
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(`${dayUntillNewYear()} days untill new year`);
// QUESTION 97:
function toGetNextBirthday(month, day) {
    let today = new Date();
    let year = today.getFullYear();
    let birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
let nextBirthday = toGetNextBirthday(2, 10);
console.log("Nesxt Birthday on:", nextBirthday.toLocaleDateString());
export {};
