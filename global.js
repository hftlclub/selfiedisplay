'use strict';

var imageApi = 'https://fotos.hftl.club/random.php';
var fadeTime = 1500;
var waitTime = 5000;

/*********************************/

var current = 0;

$(document).ready(function(){
    process();
});


function process() {
    //currently displayed container
    var currentImg = $('#images img#image' + current);
    
    //set current to next container
    if(current < 2) current++;
    else current = 0;   

    //next container to be displayed
    var nextImg = $('#images img#image' + current);

    $.ajax({
        url: imageApi,
        success: function(data) {
            nextImg.attr('src', 'https://fotos.hftl.club/' + data.path + data.file);
            currentImg.fadeOut(fadeTime);
            nextImg.fadeIn(fadeTime);

            setTimeout(process, waitTime)
        }
    });
}

function nextId() {
    if(current < 2) current++;
    else current = 0;
    return 'image' + current;
}

function currentId() {
    return 'image' + current;
}





