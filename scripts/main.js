"use strict";$(function(){function n(){$(".play-again").off("click").on("click",g),$(".play-again").show()}function t(){$(".play-again").off("click"),$(".play-again").hide()}function i(){$(".status").text("Current Turn: "+v)}function a(n){v=X[n],O=X[n+"_img"]}function c(){$(".play-area").off("click").on("click",k)}function o(){$(".play-area").off("click")}function f(){_=[["a","b","c"],["d","e","f"],["g","h","i"]]}function u(){$.each($(".play-area img"),function(n,t){$(t).attr("src",w)})}function r(){h=0}function e(){h++}function g(){t(),a("x"),i(),r(),f(),u(),c()}function l(n){$(n.target).attr("src",O)}function s(n){return $(n.target).parent().attr("class").split(" ")[0]}function p(n){$("."+n).off("click")}function k(n){l(n);var t=s(n);y(t),e(),T(),i(),m(),p(t)}function x(t){"T"==t?$(".status").text("TIE!"):$(".status").text(v+" WON"),o(),n()}function m(){for(var n="T",t=0;t<3;t++)_[t][0]==_[t][1]&&_[t][1]==_[t][2]&&(T(),n=v);for(var i=0;i<3;i++)_[0][i]==_[1][i]&&_[1][i]==_[2][i]&&(T(),n=v);_[0][0]==_[1][1]&&_[1][1]==_[2][2]&&(T(),n=v),_[2][0]==_[1][1]&&_[1][1]==_[0][2]&&(T(),n=v),9==h&&"T"==n?x(n):"T"!=n&&9!=h?x(n):9==h&&(T(),n=v,x(n))}function y(n){var t=n[1],i=n[3];_[t][i]=v}function T(){"X"===v?a("o"):"O"===v&&a("x")}var v,h,O,_,b="images/x.png",d="images/o.png",X={x:"X",x_img:b,o:"O",o_img:d},w="images/blank.png";g()});