speak.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const RECOGNITION = new SpeechRecognition();
    RECOGNITION.interimResults = true;

    RECOGNITION.addEventListener('result', e => {
        const TRANSCRIPT = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        document.getElementById("textarea").innerHTML = TRANSCRIPT;
        console.log(TRANSCRIPT);
    });
    
    if (speech == true) {
        RECOGNITION.start();
    }
})