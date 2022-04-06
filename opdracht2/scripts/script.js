
var tbody = document.querySelector('#table tbody');
var color = "white";
tbody.addEventListener('click', function (e) {
  var cell = e.target.closest('td');
  color = cell.style.color = color === "red" ? "white" :  "red";
});
  


