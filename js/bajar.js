$(document).ready(function(){
    $('a#sobre-mi').click(function(){
        $('html, body').animate({
            scrollTop:$("div.sobre-mi").offset().top},1000)}),
            $('a#proyectos').click(function(){
                $('html, body').animate({
                    scrollTop:$("div.proyectos").offset().top},1000)}),
                    $('a#contacto').click(function(){
                        $('html, body').animate({
                            scrollTop:$("div.contacto").offset().top},1000)}),
                    $('button#verMas').click(function(){$('html, body').animate({
                        scrollTop:$("div.sobre-mi").offset().top},1000)})});