 <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="30" width="30"/>
 
<h1 align="center">Target</h1>
    <p align="center">The target of this project was to create an audio-to-text transcriber made in HTML, CSS and Javascript (pure).</p>
    
<h2 align="center">About the project</h2>
    <p>I opted for a simple and functional html and css; regarding the style of the page, I built some animations with the after and before pseudo-elements, in addition to the hover, in order to make the audio recording button visually cool and intuitive for the user experience. It is worth mentioning that all the main measures of the page layout are in percentages, aiming at the responsiveness of the page. When it comes to javascript, I basically used array methods:</p>
    
   <code>from()</code>, <code>map( )</code> and <code>join( )</code>; Also, I used the Web Speech API which is a speech recognition API implemented in Chrome 25 (and higher). Therefore, as I did not build any conditional if the user uses a browser that does not support this API, such as Mozilla Firefox, the system simply will not work and will not display any error messages.</p>
    
<p>The Web Speech API is constituted with the privacy of users, because before activating the voice through the microphone, the user must authorize the execution (by means of an alert). The API contemplates the <code>SpeechRecognition</code> object, so the first step was to verify if the browser the user is using supports this object. In this case, as I have not set any conditionals, if the user uses Mozilla, which is not supported, for example, no message will appear for him. The program just won't work.</p>

 <p>The <code>transcript</code> constant stores the text that informs what the user said. The other constant: <code>recognition</code>, is used to recognize the user's voice. To recognize speech continuously, it was necessary to set the <code>continuous</code> property to <code>true</code>. In this way, the voice recognizer does not stop listening even if there are pauses in the user's speech. The <code>result</code> function defines a <code>callback</code> that is fired when the speech recognizer returns a result. The <code>results</code> property is an array of objects where each item in the array stores a possible speech recognition result.</p>
   
##

<h3 align="center">Deeper on the array methods used in the project</h3>
   <h3><code>map()</code></h3>
        <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">MDN (Mozilla documentation)</a> reveals that this method invokes the <code>callback</code> function passed by argument for each array element and returns a new array as the result. When dealing with the project code, the callback function passed in the map method is <code>result</code>.</p>
          
<p><b>Syntax:</b><p>

<code>arr.map(callback[, thisArg])</code><br></br>

   <h3><code>from()</code></h3>
       <p>According to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">MDN</a> the <code>from </code> creates a new instance of an array when passing an array-like or an iterable object (as used in the project) as an argument. Iterable objects let you collect their elements, just like <code>map</code>.
      
   <h3><code>join()</code></h3>
     <p>This method is used to join the elements of an array into a string. String elements will be separated by a specified separator and its default value is a comma (,). In the project code <code>join</code> joins the array elements into a string using '' (empty string).</p>
