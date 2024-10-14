document.addEventListener('keydown', showKeyInfo);

function showKeyInfo(event) {
    document.getElementById('keyCode').innerText = event.keyCode;
    document.getElementById('keyValue').innerText = event.key;
}
