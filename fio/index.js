function fio() {
let message = document.querySelector('#fullname').value;
let fullname = message.trim();
let arr = fullname.split(' ');

for (let i=0; i<arr.length; i++) {
    document.querySelector(`#n${i}`).innerHTML = `${arr[i].charAt(0).toUpperCase()}${arr[i].slice(1).toLowerCase()}`;}
}
