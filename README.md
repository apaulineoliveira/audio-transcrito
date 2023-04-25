<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="50" width="50"/>

<h2 align="center">Objetivo</h2>
  <p align="center">O objetivo deste projeto foi criar um transcritor de áudio para texto feito em <b>HTML</b>, <b>CSS</b> e <b>Javascript</b> (puro).</p><br>
  
  <h2 align="center">Sobre o Projeto</h2> 

<p>Optei por um html e css simpples e funcional; no que tange o estilo da página, construi algumas animações com os pseudo-elementos after e before, além do hover, com o intuito de deixar o botão de gravação de áudio visualmente bacana e intuitivo para a experiência do usuário. É válido ressaltar que todas as principais medidas do layout da página estão em <b>porcentagens</b>, visando a responsividade da mesma.<br> Se tratando javascript utilizei fundamentalmente os métodos de array:<br> from, map e join. Além disso, utilizei a API Web Speech que é uma API de reconhecimento de voz implementada no Chrome 25 (e superiores).</p>
    <p>Optei por um HTML e CSS simples e funcional, no que tange o estilo da página, construi algumas animações com os pseudo-elementos <code>after</code> e <code>before</code>, além do <code>hover</code>, com o intuito de deixar o botão de gravação de áudio visualmente bacana e intuitivo para o usuário. É válido ressaltar que todas as principais medidas estão em porcentagens visando a responsividade da página. Se tratando do Javascript utilizei fundamentalmente os métodos de array: <code>from</code>, <code>map</code> e <code>join</code>. Além disso, utilizei a API Web Speech que é uma API de reconhecimento de voz implementada no Chorome 25 e superiores. Por esse motivo, este projeto <b>não</b> funcionará em qualquer outro browser que <b>não</b> seja o Chorome 25 (ou superior). Sendo assim, como não setei nenhuma condicional, se o usuário utilizar o Mozilla, por exemplo, que não possui suporte para esta api, não aparecerá nenhuma mensagem para o usuário e o programa não funcionará.</p>

<p>A API Web Speech constitui-se com a privacidade dos utilizadores, pois antes de ativar a voz através do microfone, o utilizador deve autorizar a execução (por meio de um alert). A API contempla o objeto <code>SpeechRecognition</code>, o primeiro passo então foi verificar se o browser o qual o usuário está utilizando suporta esse objeto. Neste caso, como não setei nenhuma condicional, se o usuário utilizar o Mozilla, que não possui suporte, por exemplo, não aparecerá nenhuma mensagem para o mesmo. O programa apenas não irá funcionar.</p>

   <p>A constante <code>transcript</code> armazena o texto que informa o que o utilizador/usuário falou. A outra constante: <code>recognition</code>, é utilizada para reconhecer a voz do usuário. Para reconhecer a fala continuamente foi necessário colocar a propriedade <code>continuos</code> como <code>true</code>. Desta forma o reconhecedor de voz não para de ouvir mesmo que tenha pausas na fala do usuário. A função <code>result</code> define um <code>callback</code> que é disparado quando o reconhecedor de voz devolve um resultado. A propriedade <code>results</code> é um array de objetos em que cada item do array armazena um possível resultado de reconhecimento de voz.</p>

<h3 align="center">Compreendendo os métodos de array</h3>
  <h3>map( )</h3>
    <p>A <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map">MDN (documentação do Mozilla)</a> revela que esse método invoca a função <code>callback</code> passada por argumento para cada elemento do array e devolve um novo array como resultado. Se tratando do código do projeto a função callback passada na método map é <code>result</code>.</p>
    
<p><b>Sintaxe:</b><p>

<code>arr.map(callback[, thisArg])</code><br></br>
  <h3>from( )</h3>
 <p>Segundo a <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from">MDN</a> o método <code>from</code> cria uma nova instância de um array quando for passado um array-like ou um iterable object (como foi utilizado no projeto) como argumento. Os objetos iteráveis permitem coletar seus elementos, assim como <code>map</code>.
  <h3>join( )</h3>
    <p>Este método é usado para juntar os elementos de um array em uma string. Os elementos da string serão separados por um separador especificado e seu valor padrão é uma vírgula (,). No código do projeto o <code>join</code> junta os elementos do array em uma string usando '' (string vazia).</p>
<br></br>
<br></br>

#

  <h1 align="center">🪡 Goal</h1>  
    <p align="center">The goal of this project was to create an audio-to-text transcriber made with HTML, CSS and pure Javascript.</p>
    When it comes to Javascript, I basically used the array methods: <code>from</code>, <code>map</code> and <code>join</code>. Also, I used the Web Speech API which is a speech recognition API implemented in Chorome 25 and higher. For that reason, this project will <b>not</b> work in any other browser that <b>isn't</b> Chorome 25 (or higher).<br>

The Web Speech API is constituted with the privacy of users, because before activating the voice through the microphone, the user must authorize the execution (by means of an alert). The API contemplates the <code>SpeechRecognition</code> object, so the first step was to verify if the browser the user is using supports this object. In this case, as I have not set any conditionals, if the user uses Mozilla, which is not supported, for example, no message will appear for him. The program just won't work.<br>

The <code>transcript</code> constant stores the text that informs what the user said. The other constant: <code>recognition</code>, is used to recognize the user's voice. To recognize speech continuously, it was necessary to set the <code>continuous</code> property to <code>true</code>. In this way, the voice recognizer does not stop listening even if there are pauses in the user's speech. The <code>result</code> function defines a <code>callback</code> that is fired when the speech recognizer returns a result. The <code>results</code> property is an array of objects where each item in the array stores a possible speech recognition result.
  
<h2>Understanding array methods</h2>
   <h3>map()</h3>
     <p>A <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">mdn</a> reveals that this method invokes the function <code>callback</code> passed as an argument for each array element and returns a new array as the result. When dealing with the project code, the callback function passed in the map method is <code>result</code>.</p>
<h3>Syntax</h3>
<code>arr.map(callback[, thisArg])</code><br></br>
   <h3>from()</h3>
     <p>According to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">mdn</a> the <code>from </code> creates a new instance of an array when passing an array-like or an iterable object (as used in the project) as an argument. Iterable objects let you collect their elements, just like <code>map</code>.
   <h3>join()</h3>
     <p>This method is used to join the elements of an array into a string. String elements will be separated by a specified separator and its default value is a comma (,). In the project code <code>join</code> joins the array elements into a string using '' (empty string).</p>   
