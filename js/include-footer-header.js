function insertHeader() {
    fetch("../src/views/header.html")
        .then(response => response.text())
        .then(data => {
            var header = document.createElement("header");
            header.innerHTML = data;
            document.body.prepend(header);
        });
}

insertHeader();

function insertFooter() {
    fetch("../src/views/footer.html")
        .then(response => response.text())
        .then(data => {
            var footer = document.createElement("footer");
            footer.innerHTML = data;
            document.body.prepend(footer);
        });
}

insertFooter();