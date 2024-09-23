window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = false; // Experimente mudar para true se necessário
recognition.lang = 'pt-BR'; // Configura para português brasileiro
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
        textarea.textContent = finalTranscript;  // Exibe o texto final no textarea
        console.log('Reconhecimento de fala parado');
    }
});

recognition.addEventListener('result', function(e) {
    console.log('Evento result capturado', e); // Verifica se o evento result está sendo disparado
    const interimTranscript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
        
    finalTranscript = interimTranscript;
    console.log('Transcrição capturada: ', finalTranscript);  // Verifica o texto capturado
    textarea.textContent = finalTranscript; // Atualiza o textarea enquanto fala
});

recognition.addEventListener('end', function() {
    console.log('Reconhecimento de fala finalizado');
});

recognition.addEventListener('error', function(event) {
    console.error('Erro no reconhecimento de fala:', event.error);
});
