<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="50" width="50"/>

<h2 align="center">Objetivo</h2>
  <p align="center">O objetivo deste projeto foi criar um transcritor de áudio para texto feito em <b>HTML</b>, <b>CSS</b> e <b>Javascript</b> (puro).</p><br>
  
  <h2 align="center">Sobre o Projeto</h2> 

<p>Optei por um html e css simpples e funcional; no que tange o estilo da página, construi algumas animações com os pseudo-elementos after e before, além do hover, com o intuito de deixar o botão de gravação de áudio visualmente bacana e intuitivo para a experiência do usuário. É válido ressaltar que todas as principais medidas do layout da página estão em <b>porcentagens</b>, visando a responsividade da mesma. Se tratando do javascript utilizei fundamentalmente os métodos de array:<br></br> <code>from( )</code>, <code>map( )</code> e <code>join( )</code>; Além disso, utilizei a API Web Speech que é uma API de reconhecimento de voz implementada no Chrome 25 (e superiores). Sendo assim, como não construi nenhuma condicional caso o usuário utilize algum navegador que não suporte essa API, como o Mozilla Firefox, o sistema simplesmente não funcionará e nem exibirá nenhuma mensagem de erro.</p>
    

<p>A API Web Speech constitui-se com a privacidade dos utilizadores, pois antes de ativar a voz através do microfone, o utilizador deve autorizar a execução (por meio de um alert). A API contempla o objeto <code>SpeechRecognition</code>, o primeiro passo então foi verificar se o browser o qual o usuário está utilizando suporta esse objeto. Neste caso, como não setei nenhuma condicional, se o usuário utilizar o Mozilla, que não possui suporte, por exemplo, não aparecerá nenhuma mensagem para o mesmo. O programa apenas não irá funcionar.</p>

   <p>A constante <code>transcript</code> armazena o texto que informa o que o utilizador/usuário falou. A outra constante: <code>recognition</code>, é utilizada para reconhecer a voz do usuário. Para reconhecer a fala continuamente foi necessário colocar a propriedade <code>continuos</code> como <code>true</code>. Desta forma o reconhecedor de voz não para de ouvir mesmo que tenha pausas na fala do usuário. A função <code>result</code> define um <code>callback</code> que é disparado quando o reconhecedor de voz devolve um resultado. A propriedade <code>results</code> é um array de objetos em que cada item do array armazena um possível resultado de reconhecimento de voz.</p>
   
##   

<h3 align="center">Aprofundando sobre os métodos de array utilizados no projeto</h3>
  <h3><code>map()</code></h3>
       <p>A <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map">MDN (documentação do Mozilla)</a> revela que esse método invoca a função <code>callback</code> passada por argumento para cada elemento do array e devolve um novo array como resultado. Se tratando do código do projeto a função callback passada na método map é <code>result</code>.</p>
          
<p><b>Sintaxe:</b><p>

<code>arr.map(callback[, thisArg])</code><br></br>

  <h3><code>from()</code></h3>
      <p>Segundo a <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from">MDN</a> o método <code>from</code> cria uma nova instância de um array quando for passado um array-like ou um iterable object (como foi utilizado no projeto) como argumento. Os objetos iteráveis permitem coletar seus elementos, assim como <code>map</code>.
      
  <h3><code>join( )</code></h3>
    <p>Este método é usado para juntar os elementos de um array em uma string. Os elementos da string serão separados por um separador especificado e seu valor padrão é uma vírgula (,). No código do projeto o <code>join</code> junta os elementos do array em uma string usando '' (string vazia).</p>



  
