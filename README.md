# 🚩 Objetivo
<p>O objetivo deste projeto foi criar um transcritor de áudio para texto feito com HTML, CSS e Javascript puro.</p>
<h3>Informações relevantes</h3>
<p> Optei por um html e css simples e funcional. No que tange o estilo da página, construi algumas animações com os pseudo-elementos after e before, além do hover, com o intuito de deixar o botão de gravação de áudio visualmente bacana para o usuário. É válido ressaltar que todas as principais medidas estão em porcentagens, visando a responsividade da página.
<br>
<p>Se tratando do Javascript utilizei fundamentalmente os métodos de array: <b>from<b>, <b>map e <b>join<b>. Além disso, utilizei a API Web Speech que é uma API de reconhecimento de voz implementada no Chorome 25 e superiores. Por esse motivo, este projeto <b>não</b> funcionará em qualquer outro browser que <b>não</b> seja o Chorome 25 (ou superior).
<br>
<p>A API Web Speech constitui-se com a privacidade dos utilizadores, pois antes de ativar a voz através do microfone, o utilizador deve autorizar a execução (por meio de um alert). A API contempla o objeto <b>SpeechRecognition</b>, o primeiro passo então foi verificar se o browser o qual o usuário está utilizando suporta esse objeto. Neste caso, como não setei nenhuma condicional, se o usuário utilizar o Mozilla, que não possui suporte, por exemplo, não aparecerá nenhuma mensagem para o mesmo. O programa apenas não irá funcionar. </p>
<br>
<p>A constante <b>transcript</b> armazena o texto que informa o que o utilizador/usuário falou. A outra constante, recognition, é utilizada para reconhecer a voz do usuário. Para reconhecer a fala continuamente foi necessário colocar a propriedade <b>continuos</b> como true. Desta forma o reconhecedor de voz não para de ouvir mesmo que tenha pausas do usuário. </p>
