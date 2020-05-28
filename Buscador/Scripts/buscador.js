/*
Lenguaje de marcas
Tasca 9.2 Búsqueda de fotos en Flickr con jQuery
Autor: Carlos Andrés Hoyos
*/

//Variables para obtener la información del formulario
function getTags() {
    var etiquetas = $('.form-control').val();
    var splitEtiquetas = etiquetas.split(" ");
    var tags = splitEtiquetas.join();
    return tags
}

//funcion que obtiene las etiquetas para añadirlas en la tabla
function tableTags(tags) {
    var tags = tags.split(" ");
    var table_tags = ""
    $.each(tags, 
        function(index, tag) {
            table_tags += "<div> class='badge badge-light'>" + tag + "</div>"
        });
    return tags;
}

//funcion que obtiene el valor de tagmode para la url
function getTagOption() {
    var option = $('.form-control.form-control-lg').change().val();
    if (option == 1) {
        return 'all';
    } else {
        return 'any';
    }
}

function getURL() {
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=";
    url += getTags();
    url += "&tagmode=" + getTagOption();
    return url;
}


//funcion que crea la tabla en cada búsqueda
function addTable(json) {
    $("#taulaItems").html("");
    $.each(json.items,
        function(index, item) {
            var element = $("<tr><td>" + item.title + "</td>"
            + "<td><img src='" + item.media.m + "'></td>"
            + "<td>" + item.date_taken + "</td>"
            + "<td>" + item.author + "</td>"
            + "<td>" + tableTags(item.tags) + "</td>" 
            + "<td><a href='" + item.link + "' target='blank'>"
            + "<button type='button' class='btn-warning'>Link</button></td></tr>");
            element.appendTo("#taulaItems");
        });
}

function getTable() {
    var url = getURL();
    $.getJSON(url, addTable);
}
