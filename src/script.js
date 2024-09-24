window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = false; 
recognition.lang = 'pt-BR'; 
let isListening = false;
let finalTranscript = '';
const button = document.getElementById('speak');
const textarea = document.getElementById('textarea');

button.addEventListener('click', function() {
    if (!isListening) {
        recognition.start();
        isListening = true;
        button.textContent = 'Escutando... Clique novamente para parar';
        console.log('Reconhecimento de fala iniciado');
    } else {
        recognition.stop();
        isListening = false;
        button.textContent = 'Fale para gerar o texto';
        textarea.textContent = finalTranscript;  
        console.log('Reconhecimento de fala parado');
    }
});

recognition.addEventListener('result', function(e) {
    console.log('Evento result capturado', e); 
    const interimTranscript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
        
    finalTranscript = interimTranscript;
    console.log('Transcrição capturada: ', finalTranscript);  
    textarea.textContent = finalTranscript; 
});

recognition.addEventListener('end', function() {
    console.log('Reconhecimento de fala finalizado');
});

recognition.addEventListener('error', function(event) {
    console.error('Erro no reconhecimento de fala:', event.error);
});
