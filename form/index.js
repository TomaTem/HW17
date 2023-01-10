let comments = ["Я появляюсь только после нажатия кнопки"];

function send() {
    let newcom = document.querySelector('#newcom').value;
    console.log(newcom);
    document.querySelector('#newcom').value = null;

    let a = newcom.replace(/viagra|XXX|ххх/ig, "***");
    comments.push(a);

    let optionsString = "";
    for (let comment of comments) {
        optionsString += `<div class="com">${comment}</div>`;
    }
    document.querySelector('.storage').innerHTML = optionsString;
}

