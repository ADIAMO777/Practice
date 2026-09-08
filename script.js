let output = document.createElement("div");

for (let i = 0; i < 10; i++) {
    output.innerHTML += "I love 😊 you! Browse our selection of organic produce<br>";
}

document.body.appendChild(output);

var heading = document.querySelector("main h3");
let input = document.createElement("div");

for (let i = 0; i < 10; i++) {
    output.innerHTML += `${heading.innerHTML}<br>\n`;
}

document.body.appendChild(output); 