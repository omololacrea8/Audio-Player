var audio;
     //     window.addEventListener ('load', init, false);
     //     window.addEventListener ('click', playpause, false);
     function playpause () {
         if (audio.paused) {
             audio.play ();
         } else {
             audio.pause ();
         }
     }
     function init() {
         audio = document.getElementsByTagName ('audio') [0];
         audio.play ();
     }