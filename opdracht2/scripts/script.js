//switch
var checkBox = document.getElementById("myCheck");

function forgiveness() {
var selector = document.querySelectorAll('td input');
  if (checkBox.checked == true){
    for (var i = 0; i < selector.length; i++) {
     selector[i].setAttribute('type', 'radio');
    }
  } else {
    for (var i = 0; i < selector.length; i++) {
      selector[i].setAttribute('type', 'checkbox');
     }
  }
}
forgiveness();
checkBox.addEventListener("change", forgiveness);
voiceCommandos();

// Bediening
// keyboard B
document.addEventListener('keypress', function(event) {
  if (event.key == "b") {
    console.log("yeay b");
    document.getElementById("bingo").style.display = "flex";
  }
});
//Spraak
function voiceCommandos() {
  /* https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API */
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  /* de commando's */
  var commandos = [ 'bingo'];
  var grammar = '#JSGF V1.0; grammar commandos; public <commando> = ' + commandos.join(' | ') + ' ;'

  /* het luisterobject */
  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();

  /* als er een commando uitgesproken is */
  function spraakAfhandelen(event) {
    let last = event.results.length - 1;
    let commando = event.results[0][0].transcript;

    commando = commando.trim().toLowerCase();

    if (commando == "bingo") {
      console.log("yeay b");
      document.getElementById("bingo").style.display = "flex";
    }
  }

  function luisteren(){
    recognition.start();
  }

  /* het luisterobject de commando's leren */
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.continuous = false;
  recognition.lang = 'nl';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function(event) {
    spraakAfhandelen(event);
  }

  recognition.onend = function() {
    luisteren();
  }

  luisteren();
}
