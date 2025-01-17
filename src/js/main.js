// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(13366707), 5000);

require("component-responsive-frame/child");

// var ready = require("./brightcove");
var dot = require("./lib/dot");
var playlistTemplate = dot.compile(require("./_playlist.html"));
var videoContainer = document.querySelector(".video-container");
var playlistContainer = document.querySelector(".playlist-container");
var replayTeaser = document.querySelectorAll(".replayTeaser");
var looper = document.querySelector("#looper");
var playButton = document.querySelector(".brightcove__button");
var teaserVidCon = document.querySelector("#secondVid");

// var teaserVidCon = document.querySelector("#secondVid");
var link = document.getElementById("story-link");

var log = console.log.bind(console);

// var playlistID = '1684903667060071587';
// console.log(playlistID);

var playlistID = 'ZUTkYO64';

var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));

var closest = function(element, className) {
  while (element && !element.classList.contains(className)) element = element.parentElement;
  return element;
};

var title = document.getElementById("title");
var titleHed = document.getElementById("title-hed");


// ready(function(player) {
//   window.player = player;
//
//
//   videojs.getPlayer('playerTwo').on('loadedmetadata', function() {
//     var myPlayer = this;
//
//     replayTeaser.forEach(el => el.addEventListener('click', () => {
//       // console.log(player);
//       var playingAd = player.ads.state == "ad-playback";
//       if (!playingAd) {
//           player.pause();
//           teaserVidCon.classList.remove("hide");
//           looper.classList.add("hide");
//           playButton.classList.add("hide");
//           window.scrollTo(0, 0);
//
//           link.setAttribute("href", "https://www.seattletimes.com/video/");
//           title.innerHTML = "2020 was a year of isolation and distancing – yet its events brought us together. From the COVID-19 pandemic to a summer of protests for racial justice, allow our video journalists to transport you through this historic year. (Seattle Times staff)";
//           titleHed.innerHTML = "A look back at 2020";
//           myPlayer.currentTime(0);
//           myPlayer.play();
//       } else {}
//     }));
//
//
//
//   // player.playlist.autoadvance(3);
//
//   var playlistCache = {};
//   var lookup = {};
//
//   var retrievePlaylist = function(id, callback) {
//     if (playlistCache[id]) return callback(playlistCache[id]);
//     player.catalog.getPlaylist(id, function(err, playlist) {
//       playlistCache[id] = playlist;
//       playlist.forEach((v, i) => lookup[v.id] = v);
//       callback(playlist);
//     });
//   };
//
//   var loadPlaylist = function(id) {
//     retrievePlaylist(id, function(playlist) {
//       playlistContainer.innerHTML = playlistTemplate(playlist);
//       playlistContainer.classList.remove("loading");
//       player.catalog.load(playlist);
//     });
//
//   };
//
//
//   loadPlaylist(playlistID);
//
//   // player.load("6115775145001");
//
//   var onClickPlaylist = function() {
//     var id = this.getAttribute("data-playlist");
//     playlistContainer.innerHTML = "Loading playlist...";
//     playlistContainer.classList.add("loading");
//     document.querySelector(".choose-playlist .active").classList.remove("active");
//     this.classList.add("active");
//     loadPlaylist(id);
//   };
//
//   qsa(".choose-playlist li").forEach(el => el.addEventListener("click", onClickPlaylist));
//
//
//   playlistContainer.addEventListener("click", function(e) {
//     // console.log(player);
//     looper.classList.add("hide");
//     teaserVidCon.classList.add("hide");
//     playButton.classList.add("hide");
//     myPlayer.pause();
//
//     //don't play videos on story links
//     if (e.target.classList.contains("story-link")) return;
//     //don't play if we're in an ad state
//     if (playlistContainer.getAttribute("data-enabled") == "false") return;
//
//     var li = closest(e.target, "playlist-item");
//     var id = li.getAttribute("data-id");
//     var index = player.playlist.indexOf(lookup[id]);
//
//     window.location = "#player";
//     player.playlist.currentItem(index);
//     player.play();
//
//     setTimeout(function(){
//       // console.log(link);
//       link.setAttribute("href", player.mediainfo.link.url);
//       title.innerHTML = player.mediainfo.description;
//       titleHed.innerHTML = player.mediainfo.name;
//     }, 500);
//
//     // updateTitle(player);
//
//   });
//
//   // var updateTitle = function(newPlayer) {
//   //
//   // };
//
//   var update = function(e) {
//     if (e.type == "play") videoContainer.classList.remove("pending");
//     var active = document.querySelector("li.playlist-item.active");
//     if (active) active.classList.remove("active");
//     var playingAd = player.ads.state == "ad-playback";
//     playlistContainer.setAttribute("data-enabled", !playingAd);
//     if (playingAd) return;
//     playlistContainer.classList.add("enabled");
//     if (player.paused()) return;
//     var id = player.mediainfo.id;
//     var li = document.querySelector(`li[data-id="${id}"]`);
//     if (li) {
//       li.classList.add("active");
//     }
//
//     // console.log(player.mediainfo);
//
//     if ((e.type == "play")) {
//       setTimeout(function(){
//         // console.log
//         title.innerHTML = player.mediainfo.description;
//         titleHed.innerHTML = player.mediainfo.name;
//       }, 500);
//     }
//
//
//
//
//   };
//
//   "play playing blocked adstart adend loadstart loadedmetadata loadeddata".split(" ").forEach(e => player.on(e, update));
//
// }); //player2 func
//
//
//
// });  // ready func




// LAUREN

// overviewVid = jwplayer('teaser').setup({
// playlist: `https://cdn.jwplayer.com/v2/media/hUnsbabo`
// })

window.onload = function(){


    replayTeaser.forEach(el => el.addEventListener('click', () => {
      // console.log(player);
      // var playingAd = player.ads.state == "ad-playback";
      // if (!playingAd) {
          // jwplayer().pause();
          if (playerInstance){
            playerInstance.pause();
          }

          teaserVidCon.classList.remove("hide");
          looper.classList.add("hide");
          playButton.classList.add("hide");
          window.scrollTo(0, 0);

          link.setAttribute("href", "https://www.seattletimes.com/video/");
          title.innerHTML = "2020 was a year of isolation and distancing – yet its events brought us together. From the COVID-19 pandemic to a summer of protests for racial justice, allow our video journalists to transport you through this historic year. (Seattle Times staff)";
          titleHed.innerHTML = "A look back at 2020";
          // jwplayer('botr_hUnsbabo_UXknQA8J_div').currentTime(0);
          jwplayer('botr_hUnsbabo_UXknQA8J_div').seek(0);
          jwplayer('botr_hUnsbabo_UXknQA8J_div').play();
          // overviewVid.seek(0);
          // overviewVid.play();
      // } else {}
    }));


var getThumbnails = function({ playlist }) {
  console.log(playlist);
  playlistContainer.innerHTML = playlistTemplate(playlist);

  setClickEvent(playlist);

}

var playerInstance;

// On click, destroy existing player, setup new player in target div
var handleActivePlayer = function(thisPlaylist, number) {

  var heynow = thisPlaylist[number];

        link.setAttribute("href", heynow.link_url);
        title.innerHTML = heynow.description;
        titleHed.innerHTML = heynow.title;

  // if (playerInstance) {
  //   playerInstance.remove();
  // }
  // thumbs.forEach(t => t.classList.remove('active'));
  // target.classList.add('active');
  //
  // Chain .play() onto player setup (rather than autostart: true)
  playerInstance = jwplayer('firstVid').setup({
  playlist: `https://cdn.jwplayer.com/v2/media/${heynow.mediaid}`,
  "mute": false,
  }).play();

console.log(number + " " + thisPlaylist.length);


  // // Destroy the player and replace with thumbnail
  playerInstance.on('complete', () => {
    if (number === (thisPlaylist.length - 1)){
      handleActivePlayer(thisPlaylist, 0);
    } else {
      handleActivePlayer(thisPlaylist, (number + 1));
    }

    // playerInstance.remove();
    // playerInstance = null;
  });
};


fetch(`https://cdn.jwplayer.com/v2/playlists/${playlistID}`).then(r => r.json()).then(getThumbnails);

var setClickEvent = function(chosenPlaylist) {

document.querySelectorAll('.playlist-item').forEach(el => el.addEventListener('click', () => {
  // overviewVid.pause();
  jwplayer('botr_hUnsbabo_UXknQA8J_div').pause();
  window.location = "#player";
  var mediaID = el.getAttribute('data-id');
  teaserVidCon.classList.add("hide");
  looper.classList.add("hide");
  playButton.classList.add("hide");

  for (let i = 0; i < chosenPlaylist.length; i++) {
    var each = chosenPlaylist[i];
    if (each.mediaid === mediaID){
      handleActivePlayer(chosenPlaylist, i);
    } else {};
  };



}));

};


}
