var text;

var index=0;
var font_size=20;

function generratetext()
{ 
  word=text.slice(0,index)
  index++;
  font_size+=2;
 
  if(index>text.length)index=0;

  document.querySelector(".formatted-text").innerText=word;
  document.querySelector(".formatted-text").style.fontSize=`${font_size}px`;
  
}

document.querySelector("#submit").addEventListener('click',(e)=>{
  
  text=document.querySelector("#text").value 
  var timesRun = 0;
  var startTime = new Date().getTime();
  var interval = setInterval(function(){
      if(new Date().getTime() - startTime > 60000){
          clearInterval(interval);
          return;
      }
      //do whatever here..
      generratetext()
  }, 2000);  
}, 1000); 
})
