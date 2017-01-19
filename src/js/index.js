$(document).ready(function () {

    $(".man-face-bottom").on("click", function () {
        var that = $(this);
        console.log(this);
        that.toggleClass("active");
        $(".interadtivmap__desc").toggleClass("open")
        if ($(".interadtivmap__desc").hasClass("open")) {
            $(".interadtivmap__desc").animate({
                opacity: "1"
            }, 500);
            return;
        } else if (!$(".interadtivmap__desc").hasClass("open")){
            $(".interadtivmap__desc").animate({
                opacity: "0"
            }, 500);
            return;
        }

    })

});
