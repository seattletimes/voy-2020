var callbacks = [];
var player;

var video = document.querySelector("video");
var a = video.getAttribute("data-account");
var p = video.getAttribute("data-player");
var e = video.getAttribute("data-embed");

var src=`//players.brightcove.net/1509317113/HyhBDMT3M_default/index.min.js`;
var script = document.createElement("script");
script.src = src;

var srcTwo =`//players.brightcove.net/1509317113/V1eCvUwO2g_default/index.min.js`;
var scriptTwo = document.createElement("script");
scriptTwo.src = srcTwo;

document.head.appendChild(script);
document.head.appendChild(scriptTwo);


script.onload = function() {
  var bc = videojs("player");
  bc.ready(function() {
    callbacks.forEach(fn => fn(bc));
    player = bc;
  });
};


module.exports = function(fn) {
  if (player) {
    return fn(player);
  }
  callbacks.push(fn);
};
