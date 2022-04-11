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
  


