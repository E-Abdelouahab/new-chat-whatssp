function left(){
    var message = document.getElementById('input');

    var p = document.createElement("p");

    var pText = document.createTextNode(message.value);

    p.appendChild(pText);

    document.body.append(p);

    message.value = "";

    document.createElement("h1");
}

function right(){
    var message = document.getElementById('input');

    var span = document.createElement("span");

    var spanText = document.createTextNode(message.value);

    span.appendChild(spanText);

    document.body.append(span);

    message.value = "";

    document.createElement("h1");
}