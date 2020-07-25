var navHeight = 40;

var height = window.innerHeight;
var width = window.innerWidth;
var element = document.getElementById('tools-panel');
element.style.height = (height-navHeight)+'px';

$(document).ready(function() { 
    $(window).resize(function() { 
        var height = window.innerHeight;
        var width = window.innerWidth;
        var element = document.getElementById('tools-panel');
        element.style.height = (height-navHeight)+'px';
        var element = document.getElementById('work-area');
        element.style.height = (height-navHeight)+'px';
    }); 
}); 