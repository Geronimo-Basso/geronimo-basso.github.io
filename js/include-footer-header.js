function insertFooter() {
    // create a new element to hold the footer HTML code
    var footer = document.createElement("footer");
    footer.innerHTML = '<div id="footer-div-copyright"> \
                           <p id="footer-content"> \
                               © 2023 <a href="https://geronimo-basso.github.io/" id="copyright"> \
                               Gerónimo Basso Sosa</a> \
                           </p> \
                       </div>';

    // find the element where you want to insert the footer
    var container = document.getElementsByTagName("body")[0];

    // insert the footer HTML code into the container element
    container.appendChild(footer);
}
