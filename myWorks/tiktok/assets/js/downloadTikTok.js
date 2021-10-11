var TikTok = null;
var oldVideoDownloadBtn = "";
var oldMusicDownloadBtn = "";
$(document).ready(function () {
  $("#result-area").fadeOut();
  $("#search-bar").slideDown("slow");

  $("#search-btn").on("click", function () {
    TikTok = null;
    $("#result-area").fadeOut();
    var url = $("#search-input").val().trim();

    if (url.toLowerCase().indexOf("tiktok.com/") < 0) {
      $(".input-group").effect("shake");
      return;
    }

    $("#search-btn").prop("disabled", true);
    $("#no-result, #welcome").hide(
      "slide",
      {
        direction: "left",
      },
      200
    );

    setTimeout(function () {
      $("#loading").fadeIn();
      TikTok = new JSTikTok(url);
      TikTok.get().then(function () {
        showDatas(TikTok.datas);
      });
    }, 0);
  });

  $("#download_video").on("click", function () {
    $(".result-download-video").html(
      'Скачивание MP4 ... <span class="glyphicon glyphicon-time "></span>'
    );
    done("video");
    TikTok.download_video();
  });
});

function done(type) {
  var proxied = window.XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function () {
    var pointer = this;
    var intervalId = window.setInterval(function () {
      if (pointer.readyState != 4) {
        return;
      }
      if (type == "video") {
        $(".result-download-video").text(oldVideoDownloadBtn);
      } else if (type == "music") {
        $(".result-download-music").text(oldMusicDownloadBtn);
      }

      clearInterval(intervalId);
    }, 1);
    return proxied.apply(this, [].slice.call(arguments));
  };
}

function showDatas(datas) {
  $("#search-btn").prop("disabled", false);
  $("#loading").fadeOut();
  $("#result-area").fadeIn();
  $(".result-download-video").text("Скачать видео [MP4]");
  $(".result-download-music").text("Скачать видео [MP3]");
  oldVideoDownloadBtn = $(".result-download-video").text();
  oldMusicDownloadBtn = $(".result-download-music").text();
}
