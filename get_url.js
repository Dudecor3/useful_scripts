/*
* This file is useful for grabbing a section of a url link. I have used this to creat dynamic content. 
*/

function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? " " : decodeURIComponent(results[1].replace(/\+/g, " "));
}
