// 1) Установить NodeJS
// 2) Создать приложение
// 3) Протестировать модуль OS
// https://nodejs.org/api/os.html

const os = require("os");

console.log("operating system CPU architecture: " + os.arch())
console.log("Contains: " + JSON.stringify(os.constants))
console.log("array of objects containing information about each logical CPU core: " + JSON.stringify(os.cpus()))