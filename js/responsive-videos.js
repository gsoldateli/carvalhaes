
(function(window) {

  // Find all YouTube videos
  var $allVideos = document.querySelectorAll("iframe[src^='https://www.youtube.com']");

  var resizeEvent = function() {
    // Resize all videos according to their own aspect ratio
    for(var x = 0; x < $allVideos.length; x++) {
        $video = $allVideos[x];
        $video.style.width = "100%";
        $video.style.height = "100vh";
        $video.parentElement.style.height = $video.style.height;
    }
  };

  resizeEvent();
  window.addEventListener('resize', resizeEvent);
})(window);