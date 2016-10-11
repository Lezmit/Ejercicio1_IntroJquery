window.addEventListener("load",cargarPagina);
function cargarPagina() {
    var a = document.querySelectorAll("a");
    for (var i = 0; i < a.length; i++) {
        var href = a[i].getAttribute("href");
        var  imagYoutube = youtube.generateThumbnailUrl(href);
        var imageYoutube = document.createElement("img");
        imageYoutube.setAttribute("src",imagYoutube);
        a[i].appendChild(imageYoutube);
    }
}