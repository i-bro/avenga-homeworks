const paragraph = document.querySelectorAll('.paragraph');
const headers = document.querySelectorAll("h1, h3");
const button = document.querySelector('button');

function changeParagraphText() {
    paragraph.forEach((p) => {
        p.textContent = "This is the updated paragraph text with javaScript.";
    })
    headers.forEach((header) => {
        header.textContent = "This is the updated header text with javaScript.";
    })  
}
button.addEventListener('click', changeParagraphText);