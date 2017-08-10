var time = true;
var b=0;  
var z;
// start();

function start(){
  if(time){
   
  
  z=setInterval(hello,100)
  
  }
  }


function hello(){
   time=false
  var a = Math.floor((Math.random()*2)+1);
 b = b + a;
 document.getElementById('loader').style.width = b + '%';

  document.getElementById('loader').innerHTML = ' ';
  document.getElementById('count').innerHTML = b + '%';
  if(b>=100){
  document.getElementById('loader').style.width = 0 + '%';
    document.getElementById('count').innerHTML = '0%'; 
    alert('Loading Complete');
    time=true;
    b=0;
    clearInterval(z);
  }
  
}

