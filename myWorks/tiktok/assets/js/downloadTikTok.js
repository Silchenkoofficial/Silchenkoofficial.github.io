var TikTok = null;
var oldVideoDownloadBtn = "";
var oldMusicDownloadBtn = "";
$(document).ready(function () {
  document.getElementById("result-area").style.display = "none";

  document.getElementById("search-btn").addEventListener("click", function () {
    TikTok = null;
    document.getElementById("result-area").style.display = "none";
    var url = document.getElementById("search-input").value.trim();

    if (url.toLowerCase().indexOf("tiktok.com/") < 0) {
      $(".input-group").effect("shake");
      return;
    }

    document.getElementById("search-btn").setAttribute("disabled", true);

    setTimeout(function () {
      TikTok = new JSTikTok(url);
      TikTok.get().then(function () {
        showDatas();
      });
    }, 0);
  });

  document
    .getElementById("download_video")
    .addEventListener("click", function () {
      document.querySelector(".result-download-video").innerHTML =
        "Скачивание MP4 ...";
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
        document.querySelector(".result-download-video").textContent =
          oldVideoDownloadBtn;
      }

      clearInterval(intervalId);
    }, 1);
    return proxied.apply(this, [].slice.call(arguments));
  };
}

function showDatas() {
  document.getElementById("search-btn").setAttribute("disabled", false);
  document.getElementById("result-area").style.display = "block";
  document.querySelector(".result-download-video").textContent =
    "Скачать видео [MP4]";
  oldVideoDownloadBtn = document.querySelector(
    ".result-download-video"
  ).textContent;
}
