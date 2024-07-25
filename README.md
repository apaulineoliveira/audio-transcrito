

  
  <p align="left">Sobre o Projeto</p> 

<p>Optei por um html e css simpples e funcional; no que tange o estilo da página, construí algumas animações com os pseudo-elementos after e before, além do hover, com o intuito de deixar o botão de gravação de áudio visualmente bacana e intuitivo para a experiência do usuário. É válido ressaltar que todas as principais medidas do layout da página estão em <b>porcentagens</b>, visando a responsividade da mesma.utilizei a API Web Speech que é uma API de reconhecimento de voz implementada no Chrome 25 (e superiores). Sendo assim, como não construí nenhuma condicional caso o usuário utilize algum navegador que não suporte essa API, como o Mozilla Firefox, o sistema não funcionará e nem exibirá nenhuma mensagem de erro.</p>
    

<p>A API Web Speech constitui-se com a privacidade dos utilizadores, pois antes de ativar a voz através do microfone, o utilizador deve autorizar a execução (por meio de um alert). A API contempla o objeto <code>SpeechRecognition</code>, o primeiro passo então foi verificar se o browser o qual o usuário está utilizando suporta esse objeto. Neste caso, como não setei nenhuma condicional, se o usuário utilizar o Mozilla, que não possui suporte, por exemplo, não aparecerá nenhuma mensagem para o mesmo. O programa apenas não irá funcionar.</p>

   <p>A constante <code>transcript</code> armazena o texto que informa o que o utilizador/usuário falou. A outra constante: <code>recognition</code>, é utilizada para reconhecer a voz do usuário. Para reconhecer a fala continuamente foi necessário colocar a propriedade <code>continuos</code> como <code>true</code>. Desta forma o reconhecedor de voz não para de ouvir mesmo que tenha pausas na fala do usuário. A função <code>result</code> define um <code>callback</code> que é disparado quando o reconhecedor de voz devolve um resultado. A propriedade <code>results</code> é um array de objetos em que cada item do array armazena um possível resultado de reconhecimento de voz.</p>
   
 



  
