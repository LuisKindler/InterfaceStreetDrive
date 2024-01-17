 
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
        "WendenVonBahnhofstraße": "Videos/Extra/Wenden_Bahnhof.mov",
        "Start": "Videos/Extra/Start4_1.mp4",
        "BaumanstraßeVonBahnhofstraße": "Videos/Baumanstraße/Baumanstraße Von Bahnhofstraße 2.mp4",
        "BaumanstraßeVonSchillerstraße": "Videos/Baumanstraße/Baumanstraße_von_Schillerstraße.mov",
        "BaumanstraßeVonStart": "Videos/Baumanstraße/Baumanstraße_von_Start.mov",
        "BaumanstraßeVonWenden": "Videos/Baumanstraße/Baumanstraße_von_Wenden.mov",
        "BaumanstraßeExtra1": "Videos/Extra/Baumanstraße_Extra_1.mov",
        "BaumanstraßeExtra2": "Videos/Extra/Baumanstraße_Extra_2.mov",
        "BaumanstraßeExtra3": "Videos/Extra/Baumanstraße_Extra_3.mov",
        "BaumanstraßeExtra4": "Videos/Extra/Baumanstraße_Extra_4.mov",
        "BahnhofstraßeVonBaumanstraße": "Videos/Bahnhofstraße/Bahnhofstraße_von_Baumanstraße.mov",
        "BahnhofstraßeVonGoethestraße": "Videos/Bahnhofstraße/Bahnhofstraße_von_Goethestraße.mov",
        "BahnhofstraßeVonStart": "Videos/Bahnhofstraße/Bahnhofstraße_von_Start.mov",
        "BahnhofstraßeVonWenden": "Videos/Bahnhofstraße/Bahnhofstraße_von_Wenden.mov",
        "SchillerstraßeVonBaumannstraße": "Videos/Schillerstraße/Schillerstraße_von_Baumannstraße.mov",
        "SchillerstraßeVonGoethestraße": "Videos/Schillerstraße/Schillerstraße_von_Goethestraße.mov",
        "GoethesraßeVonBahnhofstraße": "Videos/Goethestraße/Goethestraße_von_Bahnhofstraße.mov",
        "GoethesraßeVonSchillerstraße": "Videos/Goethestraße/Goethestraße_von_Schillerstraße.mov",
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
            stopBtn.innerHTML = "▐▐";
        }
    }

    // Verstecke die Pfeiltasten-Buttons zu Beginn
    upArrowBtn.classList.add("hidden");
    stopBtn.classList.add("hidden");
    leftArrowBtn.classList.add("hidden");
    rightArrowBtn.classList.add("hidden");

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

            //Hier brauche ich noch: WendenvonStart, Wenden von Baumanstraße
            
        } else if (video.ended && currentVideo === videoPaths["BaumanstraßeExtra4"]) {
            console.log("Changing video to BahnhofstraßeVonWenden")
            changeVideo(videoPaths["BahnhofstraßeVonWenden"])

        } else if (video.ended && currentVideo === videoPaths["BaumanstraßeVonStart"]) {
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
            console.log("Changing video to WendenVonBahnhofstraße")
            changeVideo(videoPaths["WendenVonBahnhofstraße"])
        }
    });

        // Event Listener für den Button 'leftArrowBtn'
        leftArrowBtn.addEventListener('click', function () {

            //Das ist noch falsch, eigentlich muss da WendenVonStart, Vergessen
            if (video.ended && currentVideo === videoPaths["Start"]) {
                console.log("Changing video to WendenVonBahnhofstraße");
                changeVideo(videoPaths["WendenVonBahnhofstraße"]);

            } else if (video.ended && currentVideo === videoPaths["WendenVonBahnhofstraße"]) {
                console.log("Changing video to BaumanstraßeVonWenden")
                changeVideo(videoPaths["BaumanstraßeVonWenden"])
    
            } else if (video.ended && currentVideo === videoPaths["BaumanstraßeExtra1"]) {
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
            }
        });

        /*video.addEventListener('ended', function () {
            console.log("Video ended");
            video.pause();
            video.currentTime = video.duration;
            // Weitere Logik oder Aktionen hier
        });*/
        
        
});
