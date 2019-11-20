$(document).ready(function(){
    $(".see-more").click(function(){
        $(this).parent().children(".text-muted").children(".more-text").toggle();
    });
});