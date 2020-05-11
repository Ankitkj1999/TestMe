let qoute = document.getElementsByClassName('qoute')
var count = 0;
var direction = 1;
qoute[0].style.visibility = "visible";
function changeQoute(){
  for(var i=0; i<qoute.length ;i++){
    qoute[i].style.visibility = "hidden";
  }
  qoute[count].style.visibility = "visible";
  count += direction;
  if(count == (qoute.length-1)||count == 0){
    direction *= -1;
  }
}
setInterval(changeQoute,10000);
