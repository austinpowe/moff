(function($) {
    $(function(){
        $(".open").click(function(){
            $("#menu").slideDown();
            $('.open').slideUp();
        });
        $(".close").click(function(){
            $("#menu").slideUp();
            $('.open').slideDown();
        });
    });
})(jQuery);