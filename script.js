 
// Das Event 'DOMContentLoaded' wird ausgelöst, wenn die HTML-Seite vollständig geladen ist
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded");
    
    // Holen Sie sich Referenzen auf das Video-Element und die Buttons
    var video = document.getElementById("Video_Start");
    var startButton = document.getElementById("startButton");
    var stopBtn = document.getElementById("stopBtn");
    var upArrowBtn = document.getElementById("upArrowBtn");
    var leftArrowBtn = document.getElementById("leftArrowBtn");
    var rightArrowBtn = document.getElementById("rightArrowBtn");

    var videoPaths = {
        "WendenVonBahnhofstraße": "VideosFinal/Extra/Wenden_von_Bahnhofstraße.mp4",
        "WendenVonBaumanstraße": "VideosFinal/Extra/Wenden_von_Baumanstraße.mp4",
        "WendenVonStart": "VideosFinal/Extra/Wenden_von_Start.mp4",
        "Start": "VideosFinal/Extra/Start.mp4",
        "BaumanstraßeVonBahnhofstraße": "VideosFinal/Baumanstraße/Baumanstraße_von_Bahnhofstraße.mp4",
        "BaumanstraßeVonSchillerstraße": "VideosFinal/Baumanstraße/Baumanstraße_von_Schillerstraße.mp4",
        "BaumanstraßeVonStart": "VideosFinal/Baumanstraße/Baumanstraße_von_Start.mp4",
        "BaumanstraßeVonWenden": "VideosFinal/Baumanstraße/Baumanstraße_von_Wenden.mp4",
        "BaumanstraßeExtra1Schiller": "VideosFinal/Extra/Baumanstraße_Extra_von_Schillerstraße.mp4",
        "BaumanstraßeExtra1": "VideosFinal/Extra/Baumanstraße_Extra1_von_Baumanstraße.mp4",
        "BaumanstraßeExtra2": "VideosFinal/Extra/Baumanstraße_Extra2.mp4",
        "BaumanstraßeExtra3": "VideosFinal/Extra/Baumanstraße_Extra3.mp4",
        "BaumanstraßeExtra4": "VideosFinal/Extra/Baumanstraße_Extra4.mp4",
        "BahnhofstraßeVonBaumanstraße": "VideosFinal/Bahnhofstraße/Bahnhofstraße_von_Baumanstraße.mp4",
        "BahnhofstraßeVonGoethestraße": "VideosFinal/Bahnhofstraße/Bahnhofstraße_von_Goethestraße.mp4",
        "BahnhofstraßeVonStart": "VideosFinal/Bahnhofstraße/Bahnhofstraße_von_Start.mp4",
        "BahnhofstraßeVonWenden": "VideosFinal/Bahnhofstraße/Bahnhofstraße_von_Wenden.mp4",
        "SchillerstraßeVonBaumannstraße": "VideosFinal/Schillerstraße/Schillerstraße_von_Baumanstraße.mp4",
        "SchillerstraßeVonGoethestraße": "VideosFinal/Schillerstraße/Schillerstraße_von_Goethestraße.mp4",
        "GoethesraßeVonBahnhofstraße": "VideosFinal/Goethestraße/Goethestraße_von_Bahnhofstaße.mp4",
        "GoethesraßeVonSchillerstraße": "VideosFinal/Goethestraße/Goethestraße_von_Schillerstraße.mp4",
    };

    // Überprüfen Sie, ob alle Video-Elemente gefunden werden können
    Object.values(videoPaths).forEach(function (videoPath) {
            var videoElement = document.createElement('video');
            videoElement.src = videoPath;
    
            // Überprüfe, ob das Video-Element geladen werden kann
            videoElement.addEventListener('loadeddata', function () {
                console.log("Video loaded:", videoPath);
            });
    
            // Überprüfe, ob es Fehler beim Laden des Video-Elements gibt
            videoElement.addEventListener('error', function () {
                console.error("Error loading video:", videoPath);
            });
        });
        

    // Variable, um den aktuellen Videopfad zu verfolgen
    var currentVideo = videoPaths["Start"];
    
    var stoppedByUser = false;
    var isPaused = false; 

    // Funktion zum Ändern des Videos und Abspielen
    function changeVideo(videoPath) {
        console.log("Changing video to:", videoPath);
        currentVideo = videoPath;
        video.src = currentVideo;
        video.play();
        
    }

    function stopVideo() {
        console.log("Stop button clicked");
        if (!isPaused) {
            // Wenn das Video nicht pausiert ist, pausiere es
            console.log("Pausing video");
            video.pause();
            isPaused = true;
            // Aktualisiere das Symbol des Stop-Buttons auf "Play"
            stopBtn.innerHTML = "▶";
        } else {
            // Wenn das Video pausiert ist, setze es fort
            console.log("Resuming video");
            video.play();
            isPaused = false;
            // Aktualisiere das Symbol des Stop-Buttons auf "Pause"
            document.getElementById("stopBtn").innerHTML = "◼";
        }
    }

    // Verstecke die Pfeiltasten-Buttons zu Beginn
    upArrowBtn.classList.add("hidden");
    stopBtn.classList.add("hidden");
    leftArrowBtn.classList.add("hidden");
    rightArrowBtn.classList.add("hidden");
    restartBtn.classList.add("hidden");

     // Event Listener für den Button 'Start'
    startButton.addEventListener('click', function () {
        console.log("Start button clicked");
        changeVideo(videoPaths["Start"])
        startButton.style.display = "none"; // Verstecke den Start-Button nach dem Klick

         // Zeige die Pfeiltasten-Buttons nach dem Klick auf "Start"
        upArrowBtn.classList.remove("hidden");
        stopBtn.classList.remove("hidden");
        leftArrowBtn.classList.remove("hidden");
        rightArrowBtn.classList.remove("hidden");
        restartBtn.classList.remove("hidden");
    });

    stopBtn.addEventListener('click', function () {
        console.log("Stop button clicked");
        stopVideo();
    });

    // Event Listener für den Button 'upArrowBtn'
    upArrowBtn.addEventListener('click', function () {
        
        if (video.ended && currentVideo === videoPaths["Start"]) {
            console.log("Changing video to BaumanstraßeVonStart");
            changeVideo(videoPaths["BaumanstraßeVonStart"]);

        } else if (video.ended && currentVideo === videoPaths["BahnhofstraßeVonGoethestraße"]) {
            console.log("Changing video to WendenVonBahnhofstraße")
            changeVideo(videoPaths["WendenVonBahnhofstraße"])

        } else if (video.ended && currentVideo === videoPaths["WendenVonBahnhofstraße"]) {
            console.log("Changing video to BahnhofstraßeVonWenden")
            changeVideo(videoPaths["BahnhofstraßeVonWenden"])
        
        } else if (video.ended && currentVideo === videoPaths["WendenVonStart"]) {
            console.log("Changing video to BahnhofstraßeVonWenden")
            changeVideo(videoPaths["BahnhofstraßeVonWenden"])
            
        } else if (video.ended && currentVideo === videoPaths["BaumanstraßeExtra4"]) {
            console.log("Changing video to BahnhofstraßeVonWenden")
            changeVideo(videoPaths["BahnhofstraßeVonWenden"])

        } else if (video.ended && currentVideo === videoPaths["BaumanstraßeVonStart"]) {
            console.log("Changing video to BaumanstraßeExtra1")
            changeVideo(videoPaths["BaumanstraßeExtra1"])

        } else if (video.ended && currentVideo === videoPaths["BaumanstraßeVonWenden"]) {
            console.log("Changing video to BaumanstraßeExtra1")
            changeVideo(videoPaths["BaumanstraßeExtra1"])
        }
    });


    // Event Listener für den Button 'rightArrowBtn'
    rightArrowBtn.addEventListener('click', function () {
        
        if (video.ended && currentVideo === videoPaths["Start"]) {
            console.log("Changing video to BahnhofstraßeVonStart");
            changeVideo(videoPaths["BahnhofstraßeVonStart"]);

        } else if (video.ended && currentVideo === videoPaths["BaumanstraßeVonStart"]) {
            console.log("Changing video to SchillerstraßeVonBaumannstraße")
            changeVideo(videoPaths["SchillerstraßeVonBaumannstraße"])

        } else if (video.ended && currentVideo === videoPaths["SchillerstraßeVonBaumannstraße"]) {
            console.log("Changing video to GoethesraßeVonSchillerstraße")
            changeVideo(videoPaths["GoethesraßeVonSchillerstraße"])
            
        } else if (video.ended && currentVideo === videoPaths["GoethesraßeVonSchillerstraße"]) {
            console.log("Changing video to BahnhofstraßeVonGoethestraße")
            changeVideo(videoPaths["BahnhofstraßeVonGoethestraße"])

        } else if (video.ended && currentVideo === videoPaths["BahnhofstraßeVonGoethestraße"]) {
            console.log("Changing video to BaumanstraßeVonBahnhofstraße")
            changeVideo(videoPaths["BaumanstraßeVonBahnhofstraße"])

            //Das ist noch falsch, eigentlich muss da WendenVonBaumanstraße, Vergessen
        } else if (video.ended && currentVideo === videoPaths["BaumanstraßeVonSchillerstraße"]) {
            console.log("Changing video to WendenVonBaumanstraße")
            changeVideo(videoPaths["WendenVonBaumanstraße"])

        } else if (video.ended && currentVideo === videoPaths["SchillerstraßeVonGoethestraße"]) {
            console.log("Changing video to BaumanstraßeExtra1Schiller")
            changeVideo(videoPaths["BaumanstraßeExtra1Schiller"])

        } else if (video.ended && currentVideo === videoPaths["BaumanstraßeVonWenden"]) {
            console.log("Changing video to SchillerstraßeVonBaumannstraße")
            changeVideo(videoPaths["SchillerstraßeVonBaumannstraße"])
        }
    });

        // Event Listener für den Button 'leftArrowBtn'
        leftArrowBtn.addEventListener('click', function () {

            if (video.ended && currentVideo === videoPaths["Start"]) {
                console.log("Changing video to WendenVonStart");
                changeVideo(videoPaths["WendenVonStart"]);

            } else if (video.ended && currentVideo === videoPaths["WendenVonBahnhofstraße"]) {
                console.log("Changing video to BaumanstraßeVonWenden")
                changeVideo(videoPaths["BaumanstraßeVonWenden"])
    
            } else if (video.ended && currentVideo === videoPaths["BaumanstraßeExtra1"]) {
                console.log("Changing video to BaumanstraßeExtra2")
                changeVideo(videoPaths["BaumanstraßeExtra2"])

            } else if (video.ended && currentVideo === videoPaths["BaumanstraßeExtra1Schiller"]) {
                console.log("Changing video to BaumanstraßeExtra2")
                changeVideo(videoPaths["BaumanstraßeExtra2"])
                
            } else if (video.ended && currentVideo === videoPaths["BaumanstraßeExtra2"]) {
                console.log("Changing video to BaumanstraßeExtra3")
                changeVideo(videoPaths["BaumanstraßeExtra3"])
    
            } else if (video.ended && currentVideo === videoPaths["BaumanstraßeExtra3"]) {
                console.log("Changing video to BaumanstraßeExtra4")
                changeVideo(videoPaths["BaumanstraßeExtra4"])

            } else if (video.ended && currentVideo === videoPaths["BaumanstraßeExtra4"]) {
                    console.log("Changing video to BaumanstraßeVonWenden")
                    changeVideo(videoPaths["BaumanstraßeVonWenden"])
    
            } else if (video.ended && currentVideo === videoPaths["BahnhofstraßeVonStart"]) {
                console.log("Changing video to GoethesraßeVonBahnhofstraße")
                changeVideo(videoPaths["GoethesraßeVonBahnhofstraße"])

            } else if (video.ended && currentVideo === videoPaths["BahnhofstraßeVonWenden"]) {
                console.log("Changing video to GoethesraßeVonBahnhofstraße")
                changeVideo(videoPaths["GoethesraßeVonBahnhofstraße"])

            } else if (video.ended && currentVideo === videoPaths["BahnhofstraßeVonBaumanstraße"]) {
                console.log("Changing video to GoethesraßeVonBahnhofstraße")
                changeVideo(videoPaths["GoethesraßeVonBahnhofstraße"])

            } else if (video.ended && currentVideo === videoPaths["GoethesraßeVonBahnhofstraße"]) {
                console.log("Changing video to SchillerstraßeVonGoethestraße")
                changeVideo(videoPaths["SchillerstraßeVonGoethestraße"])

            } else if (video.ended && currentVideo === videoPaths["SchillerstraßeVonGoethestraße"]) {
                console.log("Changing video to BaumanstraßeVonSchillerstraße")
                changeVideo(videoPaths["BaumanstraßeVonSchillerstraße"])

            } else if (video.ended && currentVideo === videoPaths["BaumanstraßeVonSchillerstraße"]) {
                console.log("Changing video to BahnhofstraßeVonBaumanstraße")
                changeVideo(videoPaths["BahnhofstraßeVonBaumanstraße"])

            } else if (video.ended && currentVideo === videoPaths["WendenVonStart"]) {
                console.log("Changing video to BaumanstraßeVonWenden")
                changeVideo(videoPaths["BaumanstraßeVonWenden"])

            } else if (video.ended && currentVideo === videoPaths["WendenVonBaumanstraße"]) {
                console.log("Changing video to BaumanstraßeVonWenden")
                changeVideo(videoPaths["BaumanstraßeVonWenden"])
            }

        });
        
        restartBtn.addEventListener('click', function () {
            console.log("Restart button clicked");
        
            // Setze das Video auf den Anfang des aktuellen Videos zurück
            video.currentTime = 0;
        
            // Ändere das Video zum aktuellen Video (Start)
            changeVideo(videoPaths["Start"]);
        });
        
        

        
        
});
