
console.log('tes');
(function(window) {
  console.log('hm?');
  // Find all YouTube videos
  var $allVideos = document.querySelectorAll("iframe[src^='https://www.youtube.com']"),

  // The element that is fluid width
  $fluidEl = document.querySelector(".fluid-container");
  //console.log($allVideos);
  // Figure out and save aspect ratio for each video
  for(var x = 0; x < $allVideos.length; x++) {
      $video = $allVideos[x];
      
      $videoRect = $video.getBoundingClientRect();
      console.log($videoRect.height );
      console.log($videoRect.width );
      $video.dataset.aspectRatio = ($videoRect.height / $videoRect.width);
      console.log($video);
      // and remove the hard coded width/height
      $video.removeAttribute('height')
      $video.removeAttribute('width');
  }

  var resizeEvent = function() {
    $fluidElRect = $fluidEl.getBoundingClientRect();
    var newWidth = $fluidElRect.width;
    console.log('Resize?');
    // Resize all videos according to their own aspect ratio
    for(var x = 0; x < $allVideos.length; x++) {
        $video = $allVideos[x];
        $video.style.width = newWidth+"px";
        $video.style.height = (newWidth * $video.dataset.aspectRatio)+"px";
        $fluidEl.style.height = $video.style.height;
        console.log($video.style);
    }
  };

  resizeEvent();
  window.addEventListener('resize', resizeEvent);
})(window);