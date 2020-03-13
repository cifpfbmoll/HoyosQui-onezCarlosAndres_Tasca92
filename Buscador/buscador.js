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

function getTagOption() {
    var option = $('.form-control.form-control-lg').change().val();
    if (option == 1) {
        return 'all';
    } else {
        return 'any';
    }
}


