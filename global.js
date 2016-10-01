'use strict';

var imageApi = '/random.php';
var fadeTime = 1500;
var waitTime = 5000;

/*********************************/

var selectorPrefix = '#images img#image';
var current = 0;

$(document).ready(function(){
    process();
});


function process() {
    //currently displayed container
    var currentImg = $(selectorPrefix + current);
    
    //set current to next container
    if(current < 2) current++;
    else current = 0;   

    //next container to be displayed
    var nextImg = $(selectorPrefix + current);

    $.ajax({
        url: imageApi,
        success: function(data) {
            if(data.path && data.file) {
                nextImg.attr('src', data.path + data.file);
                nextImg.fadeIn(fadeTime);
            }
            currentImg.fadeOut(fadeTime);
            

            setTimeout(process, waitTime)
        }
    });
}


