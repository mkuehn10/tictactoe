"use strict";$(function(){function o(o){$(o.target).attr("src",r);var s=$(o.target).parent().attr("class").split(" ")[0];e(s),l++,console.log(l),n(),c(),$("."+s).off("click")}function n(){for(var o=0;o<3;o++)i[o][0]==i[o][1]&&i[o][1]==i[o][2]&&(console.log("someone won!"),s());for(var n=0;n<3;n++)i[0][n]==i[1][n]&&i[1][n]==i[2][n]&&(console.log("someone won!"),s());i[0][0]==i[1][1]&&i[1][1]==i[2][2]&&(console.log("someone won!"),s()),i[2][0]==i[1][1]&&i[1][1]==i[0][2]&&(console.log("someone won!"),s()),9==l&&(console.log("Tied!"),t())}function e(o){var n=o[1],e=o[3];i[n][e]=a,console.log(i)}function c(){"X"===a?(r="images/o.png",a="O"):"O"===a&&(r="images/x.png",a="X")}function s(){$(".play-area").off("click"),t()}function t(){console.log("Game over!"),$(".status").css("color","crimson"),$(".status").text("Game over!")}var a="O",l=0,r="",i=[["a","b","c"],["d","e","f"],["g","h","i"]];$(".play-area").click(function(n){o(n)}),c(a)});