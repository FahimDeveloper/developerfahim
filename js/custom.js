$(document).ready(function () {/*typed js*/ var typed = new Typed('#typed', { strings: ['tuohidul islam fahim.', 'web designer.', 'mern stack developer'], typeSpeed: 30, backSpeed: 20, startDelay: 1000, loop: true, backDelay: 2000, loopCount: Infinity, cursorChar: ' ', }); $('#bar1').barfiller(); $('#bar2').barfiller(); $('#bar3').barfiller(); $('#bar4').barfiller(); $('#bar5').barfiller(); $('#bar6').barfiller(); $(".my_work").slick({ "slideToShow": 1, "slideToScroll": 1, "autoplay": true, "autoplaySpeed": 2000, "prevArrow": ".left_arrow i", "nextArrow": ".right_arrow i", "dots": true, "speed": 1200, "pauseOnFocus": false }); $('.anchor-scroll').anchorScroll({ scrollSpeed: 500, }); $(".main_nav ul li").click(function () { $(".main_nav ul li").removeClass("active"); $(this).addClass("active"); }); /*scrollspy*/ $(".scrollspy2").waypoint(function (direction) { if (direction == "down") { $(".scrollspy_2").addClass("active"); $(".scrollspy_1").removeClass("active"); } else { $(".scrollspy_1").addClass("active"); $(".scrollspy_2").removeClass("active"); } }); $(".scrollspy3").waypoint(function (direction) { if (direction == "down") { $(".scrollspy_3").addClass("active"); $(".scrollspy_2").removeClass("active"); } else { $(".scrollspy_2").addClass("active"); $(".scrollspy_3").removeClass("active"); } }); $(".scrollspy4").waypoint(function (direction) { if (direction == "down") { $(".scrollspy_4").addClass("active"); $(".scrollspy_3").removeClass("active"); } else { $(".scrollspy_3").addClass("active"); $(".scrollspy_4").removeClass("active"); } }); });
